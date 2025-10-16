"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"
import { X, AlertCircle } from "lucide-react"

interface CalBookingProps {
  username: string
  eventSlug: string
  variant?: 'main' | 'sidebar'
}

export function CalBooking({ variant = 'sidebar' }: CalBookingProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)


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
          className="bg-white dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-slate-800 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-lg md:text-xl px-8 py-4 h-16 cursor-pointer transition-colors duration-200"
          onClick={handleOpenModal}
          disabled={loading}
        >
          {loading ? "Lädt..." : "Jetzt ein Erstgespräch buchen"}
        </MovingBorderButton>
      ) : (
        <Button
          onClick={handleOpenModal}
          className="w-full"
          size="sm"
          disabled={loading}
        >
          {loading ? "Lädt..." : "Termin vereinbaren"}
        </Button>
      )}


      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-xl font-semibold">Termin vereinbaren</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseModal}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Error Display */}
            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg mx-4 mt-4">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <span className="text-sm text-red-700 dark:text-red-300">{error}</span>
                </div>
              </div>
            )}
            
            {/* Cal.com Embed */}
            <div className="p-4 h-[calc(90vh-80px)] overflow-auto">
              {loading && (
                <div className="flex items-center justify-center h-32">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                    <p className="text-sm text-muted-foreground">Cal.com wird geladen...</p>
                  </div>
                </div>
              )}
              
              {/* Cal.com Embed - Direct iframe */}
              <iframe
                src="https://cal.com/miguelhaesler/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded-lg"
                title="Cal.com Booking"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                style={{ display: loading ? 'none' : 'block' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
