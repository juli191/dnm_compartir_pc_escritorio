"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Send } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ChatSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ChatSidebar({ isOpen, onClose }: ChatSidebarProps) {
  const [messages, setMessages] = useState<
    Array<{
      id: number
      text: string
      isBot: boolean
      timestamp: Date
    }>
  >([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showInitialMessage, setShowInitialMessage] = useState(false)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const timer = setTimeout(() => {
        setShowInitialMessage(true)
        setMessages([
          {
            id: 1,
            text: "¡Hola! 👋\n\nSoy el agente virtual de Déjalo en Nuestras Manos Asturias.\n\nPara ayudarte lo antes posible necesito 3 datos rápidos:\n\n1. Tu nombre\n2. Tu teléfono (te llamamos en minutos)\n3. Breve descripción de lo que necesitas\n\nEn cuanto me los des estos datos te paso la consulta al equipo y te contactamos en menos de 1 hora.\n\n¡Gracias!",
            isBot: true,
            timestamp: new Date(),
          },
        ])
      }, 4500)

      return () => clearTimeout(timer)
    }
  }, [isOpen, messages.length])

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      await fetch("https://dejaloennuestrasmanos.app.n8n.cloud/webhook/dejalo-en-nuestras-manos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue,
          timestamp: new Date().toISOString(),
        }),
      })

      const botResponse = {
        id: messages.length + 2,
        text: "Perfecto, he recibido tu mensaje. El equipo te contactará pronto. ¿Hay algo más que quieras añadir?",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    } catch (error) {
      console.error("Error sending message:", error)
      const errorMessage = {
        id: messages.length + 2,
        text: "Lo siento, hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos directamente al +34 614 488 643.",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed top-0 right-0 h-screen w-full md:w-[400px] bg-white shadow-2xl z-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-600 to-stone-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
            <Image src="/logo.png" alt="DNM" width={40} height={40} className="object-contain" />
          </div>
          <div>
            <h3 className="font-bold">DNM Asturias</h3>
            <p className="text-xs opacity-90">En línea</p>
          </div>
        </div>
        <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
        {!showInitialMessage && messages.length === 0 && (
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src="/logo.png" alt="DNM" width={40} height={40} className="object-contain" />
              </div>
              <p className="text-stone-500 text-sm">Conectando con el agente...</p>
            </div>
          </div>
        )}
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.isBot ? "bg-white text-gray-800 shadow-sm" : "bg-stone-600 text-white"
              }`}
            >
              {message.isBot && (
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-stone-100 rounded-full flex items-center justify-center overflow-hidden p-1">
                    <Image src="/logo.png" alt="Bot" width={24} height={24} className="object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-stone-600">DNM Bot</span>
                </div>
              )}
              <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
              <p className="text-xs opacity-60 mt-1">
                {message.timestamp.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-stone-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu mensaje..."
            className="flex-1 px-4 py-3 border border-stone-300 rounded-full focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-500/20"
            disabled={isLoading}
          />
          <Button
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="bg-stone-600 hover:bg-stone-700 text-white rounded-full w-12 h-12 p-0 flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
