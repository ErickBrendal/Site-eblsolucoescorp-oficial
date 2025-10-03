import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Code2, 
  Sparkles, 
  Rocket, 
  Mail, 
  Linkedin, 
  Github, 
  MessageCircle,
  ChevronRight,
  Check,
  Zap,
  Users,
  Target,
  TrendingUp
} from 'lucide-react'
// import logo from './assets/logo.png'
import heroIllustration from './assets/hero-illustration.png'
import './App.css'

function App() {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Sites profissionais, landing pages e aplicações web modernas com as melhores tecnologias do mercado.",
      features: ["React & Next.js", "Design Responsivo", "SEO Otimizado"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "CRM Salesforce",
      description: "Consultoria especializada em implementação e customização de Salesforce para otimizar seus processos.",
      features: ["Implementação", "Customização", "Integração"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automação RPA",
      description: "Automatize processos repetitivos e aumente a produtividade da sua empresa com RPA.",
      features: ["Análise de Processos", "Desenvolvimento", "Manutenção"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Arquitetura de Prompts",
      description: "Otimização de prompts para IA generativa, maximizando resultados e eficiência.",
      features: ["Prompt Engineering", "Fine-tuning", "Consultoria IA"]
    }
  ]

  const stats = [
    { number: "100+", label: "Projetos Entregues" },
    { number: "50+", label: "Clientes Satisfeitos" },
    { number: "5+", label: "Anos de Experiência" },
    { number: "24/7", label: "Suporte Disponível" }
  ]

  const whatsappLink = "https://wa.me/5511984843866?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
  const emailLink = "mailto:erick.almeida@eblsolucoescorp.com"
  const linkedinLink = "https://www.linkedin.com/in/erickbrendal"
  const githubLink = "https://github.com/ErickBrendal"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={heroIllustration} alt="EBL Soluções Corp" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-slate-900">EBL Soluções Corp</h1>
              <p className="text-xs text-slate-600">Transformando Ideias em Sucesso Digital</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#servicos" className="text-slate-700 hover:text-slate-900 transition-colors">Serviços</a>
            <a href="#sobre" className="text-slate-700 hover:text-slate-900 transition-colors">Sobre</a>
            <a href="#contato" className="text-slate-700 hover:text-slate-900 transition-colors">Contato</a>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Conteúdo à esquerda */}
            <div className="text-left">
              <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
                <Sparkles className="w-3 h-3 mr-1" />
                Soluções Digitais Inovadoras
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Transformando Ideias em
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Sucesso Digital
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                Desenvolvimento web, CRM Salesforce, automação RPA e arquitetura de prompts para IA. 
                Soluções completas para transformar seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg px-8 py-6"
                >
                  Solicitar Orçamento
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' })}
                  className="text-lg px-8 py-6"
                >
                  Conhecer Serviços
                </Button>
              </div>
            </div>

            {/* Imagem à direita */}
            <div className="flex justify-center items-center">
              <img 
                src={heroIllustration} 
                alt="Ilustração de transformação digital" 
                className="w-full max-w-md md:max-w-lg lg:max-w-xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-100 text-cyan-700 hover:bg-cyan-200">
              <Rocket className="w-3 h-3 mr-1" />
              Nossos Serviços
            </Badge>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              Soluções Completas para Seu Negócio
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Oferecemos serviços especializados para impulsionar sua presença digital e otimizar seus processos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`transition-all duration-300 hover:shadow-2xl cursor-pointer border-2 ${
                  hoveredService === index ? 'border-blue-500 scale-105' : 'border-transparent'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h4>
                      <p className="text-slate-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-slate-700">
                            <Check className="w-4 h-4 mr-2 text-green-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
                <Users className="w-3 h-3 mr-1" />
                Sobre Nós
              </Badge>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                Experiência e Inovação em Soluções Digitais
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                A EBL Soluções Corp é especializada em desenvolvimento web, consultoria em CRM Salesforce, 
                automação de processos (RPA) e arquitetura de prompts para IA generativa.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Nossa missão é transformar desafios em oportunidades, oferecendo soluções tecnológicas 
                que impulsionam o crescimento e a eficiência dos nossos clientes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-sm py-2 px-4">React & Next.js</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">Salesforce</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">RPA</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">IA Generativa</Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">SEO</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 flex items-center justify-center">
                <TrendingUp className="w-64 h-64 text-white opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Pronto para Transformar Seu Negócio?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares.
          </p>
          <Button 
            size="lg"
            onClick={() => window.open(whatsappLink, '_blank')}
            className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-6"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar com Especialista
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
              <Mail className="w-3 h-3 mr-1" />
              Entre em Contato
            </Badge>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              Vamos Conversar?
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Escolha a melhor forma de entrar em contato conosco. Estamos prontos para atendê-lo!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => window.open(whatsappLink, '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">WhatsApp</h4>
                <p className="text-sm text-slate-600 mb-3">Resposta rápida</p>
                <Button variant="outline" className="w-full">
                  Abrir Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => window.open(emailLink, '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">E-mail</h4>
                <p className="text-sm text-slate-600 mb-3">Contato formal</p>
                <Button variant="outline" className="w-full">
                  Enviar E-mail
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => window.open(linkedinLink, '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Linkedin className="w-8 h-8 text-cyan-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">LinkedIn</h4>
                <p className="text-sm text-slate-600 mb-3">Rede profissional</p>
                <Button variant="outline" className="w-full">
                  Ver Perfil
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => window.open(githubLink, '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                  <Github className="w-8 h-8 text-slate-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">GitHub</h4>
                <p className="text-sm text-slate-600 mb-3">Projetos open source</p>
                <Button variant="outline" className="w-full">
                  Ver Repositórios
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={heroIllustration} alt="EBL Soluções Corp" className="h-10 w-auto brightness-0 invert" />
                <div>
                  <h5 className="font-bold">EBL Soluções Corp</h5>
                  <p className="text-sm text-slate-400">Transformando Ideias em Sucesso Digital</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Soluções digitais inovadoras para empresas que buscam excelência e crescimento sustentável.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Serviços</h5>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Desenvolvimento Web</li>
                <li>CRM Salesforce</li>
                <li>Automação RPA</li>
                <li>Arquitetura de Prompts</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4">Contato</h5>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href={emailLink} className="hover:text-white transition-colors">
                    erick.almeida@eblsolucoescorp.com
                  </a>
                </li>
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +55 (11) 98484-3866
                  </a>
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a 
                  href={linkedinLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} EBL Soluções Corp. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 z-50"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  )
}

export default App
