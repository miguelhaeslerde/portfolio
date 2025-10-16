"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"
import { X, AlertCircle } from "lucide-react"
import { createPortal } from "react-dom"

interface CalBookingProps {
  username: string
  eventSlug: string
  variant?: 'main' | 'sidebar'
}

export function CalBooking({ variant = 'sidebar' }: CalBookingProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  const handleOpenModal = () => {
    setLoading(true)
    setError(null)
    setIsOpen(true)
    
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
    setError(null)
  }

  const handleIframeLoad = () => {
    setLoading(false)
    setError(null)
  }

  const handleIframeError = () => {
    setError("Cal.com konnte nicht geladen werden. Bitte versuchen Sie es später erneut.")
    setLoading(false)
  }

  return (
    <>
      {/* Trigger Button */}
      {variant === 'main' ? (
        <MovingBorderButton
          as="button"
          borderRadius="1.75rem"
          containerClassName="w-auto min-w-80 cursor-pointer"
          className="bg-background hover:bg-muted text-foreground border-border text-lg md:text-xl px-8 py-4 h-16 cursor-pointer transition-all duration-200 shadow-professional hover:shadow-professional-lg"
          onClick={handleOpenModal}
          disabled={loading}
        >
          {loading ? "Lädt..." : "Jetzt ein Erstgespräch buchen"}
        </MovingBorderButton>
      ) : (
        <Button
          onClick={handleOpenModal}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-professional hover:shadow-professional-lg transition-all duration-200"
          size="sm"
          disabled={loading}
        >
          {loading ? "Lädt..." : "Termin vereinbaren"}
        </Button>
      )}


      {/* Popup Modal - Rendered as Portal to avoid container constraints */}
      {isOpen && mounted && createPortal(
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-background rounded-2xl shadow-professional-lg max-w-6xl w-full max-h-[90vh] overflow-hidden border border-border/50">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50 bg-muted/30">
              <h2 className="text-2xl font-semibold text-foreground">Termin vereinbaren</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseModal}
                className="h-10 w-10 hover:bg-muted/50 transition-colors"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Error Display */}
            {error && (
              <div className="p-6 bg-destructive/10 border border-destructive/20 rounded-xl mx-6 mt-6">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                  <span className="text-sm text-destructive font-medium">{error}</span>
                </div>
              </div>
            )}
            
            {/* Cal.com Embed */}
            <div className="p-6 h-[calc(90vh-120px)] overflow-auto">
              {loading && (
                <div className="flex items-center justify-center h-32">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground font-medium">Cal.com wird geladen...</p>
                  </div>
                </div>
              )}
              
              {/* Cal.com Embed - Direct iframe */}
              <iframe
                src="https://cal.com/miguelhaesler/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded-xl shadow-professional"
                title="Cal.com Booking"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                style={{ display: loading ? 'none' : 'block' }}
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
