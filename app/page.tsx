"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Hammer, Building2, Phone, Mail, MapPin, CheckCircle2, Wrench } from "lucide-react"
import { ChatSidebar } from "@/components/chat-sidebar"
import { useState } from "react"

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/hero.jpg" alt="Interior moderno" fill className="object-cover brightness-75" priority />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="Déjalo En Nuestras Manos"
              width={600}
              height={200}
              className="w-auto h-auto max-w-[600px]"
            />
          </div>

          <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto text-white/90">
            Nos ocupamos de todo para que tú no tengas que preocuparte por nada.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/construction-site-clean-organized-work-in-progress.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-foreground/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">Nuestra razón de ser</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  En Déjalo En Nuestras Manos nuestro propósito fundamental es la satisfacción plena de nuestros
                  clientes. Buscamos que, al confiar en nosotros, cada persona pueda despreocuparse completamente de los
                  problemas de su hogar, entregándonos la llave y la tranquilidad de saber que todo será resuelto.
                </p>
                <p>
                  Sabemos, por experiencia, que las obras generan incertidumbre y ajustes imprevistos; por eso,
                  garantizamos acompañamiento durante 6 meses posteriores a la finalización, asegurando que todo lo
                  intervenido quede en óptimas condiciones. Nuestro presupuesto inicial cubre posibles imprevistos, y
                  nuestra coherencia y profesionalismo nos permiten cumplir siempre con lo prometido.
                </p>
                <p>
                  Cada acción de nuestra empresa guía a nuestro equipo, refuerza nuestra identidad corporativa y
                  comunica el valor que aportamos: clientes satisfechos, confianza y soluciones integrales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Características principales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Propósito</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Crear una empresa sólida con trayectoria y confianza en el tiempo.
                </p>
              </div>
            </Card>
            <Card className="p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Visión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Crear una empresa sólida con trayectoria y confianza en el tiempo.
                </p>
              </div>
            </Card>
            <Card className="p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Identidad</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestros valores son responsabilidad, cumplimiento y compromiso con hechos reales.
                </p>
              </div>
            </Card>
            <Card className="p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Guía</h3>
                <p className="text-muted-foreground leading-relaxed">
                  La veracidad es nuestra brújula para decisiones estratégicas y operativas.
                </p>
              </div>
            </Card>
            <Card className="p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Enfoque</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada acción individual de nuestros empleados contribuye a generar más clientes satisfechos.
                </p>
              </div>
            </Card>
            <Card className="p-8 md:col-span-2 lg:col-span-2 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Comunicación</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "Déjalo en nuestras manos" refleja nuestra filosofía: disfruta los resultados sin preocupaciones.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones integrales con garantía de 6 meses de acompañamiento post-obra
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Construcción</h3>
              <p className="text-muted-foreground leading-relaxed">
                Proyectos de construcción completos con los más altos estándares de calidad.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Hammer className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Reformas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reformas integrales adaptadas a tus necesidades y presupuesto.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Mantenimiento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Servicios de mantenimiento preventivo y correctivo para tu hogar.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-primary text-primary-foreground">
              <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Atención post-obra</h3>
              <p className="leading-relaxed opacity-90">6 meses de seguimiento y resolución de cualquier ajuste.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">¿Por qué elegirnos?</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  No solo realizamos reformas integrales con garantía y calidad; garantizamos que cada cliente viva la
                  experiencia con total tranquilidad, confiando en nuestro acompañamiento continuo durante 6 meses
                  posteriores a la obra. Cada ajuste o imprevisto será resuelto, transformando la confianza en seguridad
                  y satisfacción duradera.
                </p>
                <p className="font-semibold text-foreground">
                  Elegirnos significa despreocuparse de los problemas del hogar, porque nosotros nos ocupamos de todo,
                  con responsabilidad, compromiso y excelencia.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/hero.jpg" alt="Interior de calidad" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground">Identidad de Marca</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Generar la máxima satisfacción de nuestros clientes resolviendo integralmente sus necesidades en
                reformas del hogar. Nos aseguramos de que, al finalizar la obra, cada cliente se sienta respaldado y
                tranquilo, contando con nuestro acompañamiento durante 6 meses posteriores a la entrega. Buscamos que la
                confianza depositada en nosotros se convierta en referencia para nuevos clientes, construyendo
                relaciones sólidas basadas en responsabilidad, cumplimiento y resultados reales.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser la empresa de reformas referente en Oviedo – Asturias, reconocida por trayectoria, seriedad y
                compromiso. Aspiramos a que "Déjalo En Nuestras Manos" sea sinónimo de confianza, garantía y
                acompañamiento post-obra, convirtiéndonos en la primera opción para quienes desean soluciones integrales
                sin preocupaciones.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Valores</h3>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Responsabilidad:</span> Nos apropiamos de cada
                    intervención.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Cumplimiento:</span> Plazos claros y presupuestos
                    realistas.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Compromiso:</span> Tranquilidad y respaldo total.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Calidad:</span> Excelencia técnica y estética.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Transparencia:</span> Comunicación clara y honesta.
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para empezar tu proyecto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Transforma tu casa con confianza. Déjalo en nuestras manos.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="tel:+34614488643" className="flex items-center gap-2 justify-center text-lg hover:underline">
              <Phone className="w-5 h-5" />
              <span>+34 614 488 643</span>
            </a>
            <a
              href="mailto:contacto@henmos.es"
              className="flex items-center gap-2 justify-center text-lg hover:underline"
            >
              <Mail className="w-5 h-5" />
              <span>contacto@henmos.es</span>
            </a>
          </div>

        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4 flex items-center gap-3 md:gap-4">
                <Image
                  src="/logo.png"
                  alt="Déjalo En Nuestras Manos"
                  width={150}
                  height={150}
                  className="w-auto h-auto max-w-[60px] md:max-w-[80px] lg:max-w-[100px]"
                />
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-background">
                  Déjalo En
                  <br />
                  Nuestras Manos
                </h2>
              </div>
              <p className="text-background/70 leading-relaxed">
                Reformas integrales en Oviedo – Asturias. Tu tranquilidad es nuestra prioridad.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Servicios</h3>
              <ul className="space-y-2 text-background/70">
                <li>Construcción</li>
                <li>Reformas</li>
                <li>Mantenimiento</li>
                <li>Atención post-obra 6 meses</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contacto</h3>
              <ul className="space-y-2 text-background/70">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>Oviedo – Asturias</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+34 614 488 643</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>contacto@henmos.es</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2025 Déjalo En Nuestras Manos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 border-2 border-white bg-black/60 backdrop-blur-mdS text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105 z-40 flex items-center gap-3 font-bold text-lg animate-bounce backdrop-blur-sm"
        style={{
          animation: "bounce 2s ease-in-out infinite, pulse 1.5s ease-in-out infinite",
        }}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        Solicita tu presupuesto gratuito
      </button>

      <ChatSidebar isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
}
