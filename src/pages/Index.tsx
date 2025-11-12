import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const products = [
    { name: 'Пицца', icon: '🍕', color: 'bg-[#FEC6A1]' },
    { name: 'Бургеры', icon: '🍔', color: 'bg-[#93C5FD]' },
    { name: 'Суши', icon: '🍱', color: 'bg-[#FDE1D3]' },
    { name: 'Десерты', icon: '🍰', color: 'bg-[#E5DEFF]' },
    { name: 'Напитки', icon: '🥤', color: 'bg-[#FFDEE2]' },
    { name: 'Салаты', icon: '🥗', color: 'bg-[#F2FCE2]' },
  ];

  const cities = [
    { name: 'Москва', count: 45 },
    { name: 'Санкт-Петербург', count: 32 },
    { name: 'Казань', count: 18 },
    { name: 'Екатеринбург', count: 22 },
    { name: 'Новосибирск', count: 15 },
    { name: 'Краснодар', count: 12 },
  ];

  const steps = [
    { step: '01', title: 'Выбери', desc: 'Загадай желание — выбери любимое блюдо', icon: 'Search' },
    { step: '02', title: 'Закажи', desc: 'Джин мгновенно получит твой заказ', icon: 'ShoppingCart' },
    { step: '03', title: 'Получи', desc: 'Волшебство происходит — еда у тебя!', icon: 'Sparkles' },
  ];

  const facts = [
    { number: '500K+', label: 'Исполненных желаний' },
    { number: '15 мин', label: 'Среднее время доставки' },
    { number: '98%', label: 'Довольных клиентов' },
    { number: '24/7', label: 'Работаем для вас' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#D946EF] via-[#9b87f5] to-[#7E69AB] min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                Загадай желание —<br />
                <span className="text-[#93C5FD]">получи еду!</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium">
                WishFood — твой личный джин доставки. Быстро, вкусно, волшебно! ✨
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-white text-[#D946EF] hover:bg-white/90 text-lg px-8 py-6 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
                  Заказать сейчас
                  <Icon name="ArrowRight" className="ml-2" size={24} />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full font-bold">
                  Меню
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="animate-float">
                <img 
                  src="https://cdn.poehali.dev/files/ab18d761-0904-449b-9587-f83bf566492e.png" 
                  alt="WishFood Genie" 
                  className="w-full max-w-lg mx-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-4 text-[#7E69AB]">
            Как это работает?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">Три простых шага до волшебства</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((item, idx) => (
              <Card key={idx} className="border-4 border-[#7E69AB]/20 hover:border-[#D946EF] transition-all hover:scale-105 hover:shadow-2xl rounded-3xl bg-gradient-to-br from-white to-[#E5DEFF]/30">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#D946EF] to-[#9b87f5] rounded-full flex items-center justify-center text-white shadow-lg">
                    <Icon name={item.icon as any} size={40} />
                  </div>
                  <div className="text-6xl font-black text-[#93C5FD]">{item.step}</div>
                  <h3 className="text-2xl font-black text-[#7E69AB]">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#FEC6A1]/30 to-[#FFDEE2]/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-4 text-[#7E69AB]">
            WishFood в цифрах
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">Магия, подкрепленная фактами</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {facts.map((fact, idx) => (
              <div key={idx} className="text-center space-y-2 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#9b87f5]">
                  {fact.number}
                </div>
                <p className="text-lg font-semibold text-[#7E69AB]">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-4 text-[#7E69AB]">
            Что доставляем?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">Все, что душа пожелает</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {products.map((product, idx) => (
              <Card key={idx} className={`${product.color} border-0 hover:scale-110 transition-transform cursor-pointer rounded-3xl shadow-lg`}>
                <CardContent className="p-8 text-center space-y-3">
                  <div className="text-6xl mb-2">{product.icon}</div>
                  <h3 className="text-xl font-bold text-[#7E69AB]">{product.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#7E69AB] to-[#9b87f5]">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-4 text-white">
            Мы по всей России
          </h2>
          <p className="text-xl text-center text-white/90 mb-16">География нашего волшебства</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cities.map((city, idx) => (
              <Card key={idx} className="bg-white/95 hover:bg-white transition-all hover:scale-105 rounded-2xl border-0 shadow-xl">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D946EF] to-[#9b87f5] rounded-full flex items-center justify-center">
                      <Icon name="MapPin" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#7E69AB]">{city.name}</h3>
                      <p className="text-gray-600">{city.count} точек</p>
                    </div>
                  </div>
                  <Icon name="ChevronRight" className="text-[#D946EF]" size={24} />
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-[#7E69AB] hover:bg-white/90 text-lg px-8 py-6 rounded-full font-bold shadow-xl">
              <Icon name="Map" className="mr-2" size={24} />
              Посмотреть все точки
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-[#7E69AB] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl font-black mb-4">WishFood</div>
          <p className="text-white/80 mb-6">Твой джин доставки еды ✨</p>
          <div className="flex justify-center gap-6 mb-8">
            <Icon name="Instagram" className="cursor-pointer hover:scale-110 transition-transform" size={28} />
            <Icon name="Facebook" className="cursor-pointer hover:scale-110 transition-transform" size={28} />
            <Icon name="Twitter" className="cursor-pointer hover:scale-110 transition-transform" size={28} />
          </div>
          <p className="text-white/60 text-sm">© 2024 WishFood. Все желания исполнены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
