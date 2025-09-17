import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const World = () => {
  const locations = [
    {
      id: 1,
      name: 'Крепость Штормов',
      type: 'Город',
      level: '1-20',
      description: 'Величественная крепость на скалистом побережье, где воины оттачивают своё мастерство',
      features: ['Арена сражений', 'Школа воинов', 'Торговые ряды', 'Порт'],
      danger: 'Низкая',
      population: '15,000'
    },
    {
      id: 2,
      name: 'Башня Магов',
      type: 'Святилище',
      level: '25-45',
      description: 'Парящая в облаках башня, где изучают тайны древней магии',
      features: ['Библиотека заклинаний', 'Лаборатория алхимии', 'Астрономическая обсерватория'],
      danger: 'Средняя',
      population: '2,500'
    },
    {
      id: 3,
      name: 'Подземелья Города',
      type: 'Подземелье',
      level: '15-35',
      description: 'Лабиринт тёмных туннелей под столицей, полный секретов и опасностей',
      features: ['Тайные проходы', 'Логово воров', 'Древние катакомбы', 'Сокровищницы'],
      danger: 'Высокая',
      population: '???'
    },
    {
      id: 4,
      name: 'Драконья Пещера',
      type: 'Рейд',
      level: '50+',
      description: 'Логово древнего дракона в вулканических горах. Для самых отважных героев',
      features: ['Драконье сокровище', 'Лавовые озёра', 'Древние руны'],
      danger: 'Экстремальная',
      population: '1'
    }
  ];

  const getDangerColor = (danger: string) => {
    switch (danger) {
      case 'Низкая': return 'bg-green-500';
      case 'Средняя': return 'bg-yellow-500';
      case 'Высокая': return 'bg-orange-500';
      case 'Экстремальная': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Город': return 'Building';
      case 'Святилище': return 'Castle';
      case 'Подземелье': return 'Mountain';
      case 'Рейд': return 'Flame';
      default: return 'MapPin';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="fantasy-title text-5xl font-bold text-primary mb-4">
            🌍 Мир Фэнтези
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Исследуй величественные локации полные тайн, сокровищ и приключений
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {locations.map((location) => (
            <Card key={location.id} className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name={getTypeIcon(location.type)} size={20} className="text-primary" />
                    <Badge variant="outline" className="border-primary/30">
                      {location.type}
                    </Badge>
                  </div>
                  <Badge className={`${getDangerColor(location.danger)} text-white`}>
                    {location.danger}
                  </Badge>
                </div>
                
                <CardTitle className="fantasy-title text-2xl text-primary mb-2">
                  {location.name}
                </CardTitle>
                
                <CardDescription className="text-foreground/70 mb-4">
                  {location.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                {/* Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-foreground/70 mb-1">Уровень</div>
                    <div className="font-semibold text-primary">{location.level}</div>
                  </div>
                  <div>
                    <div className="text-sm text-foreground/70 mb-1">Население</div>
                    <div className="font-semibold text-primary">{location.population}</div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <Icon name="Star" size={16} className="mr-2" />
                    Особенности
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {location.features.map((feature, index) => (
                      <div key={index} className="text-sm text-foreground/80 flex items-center">
                        <Icon name="Dot" size={12} className="mr-1 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon name="Navigation" size={16} className="mr-2" />
                  Исследовать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* World Map */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="fantasy-title text-3xl text-primary">
                🗺️ Карта Мира
              </CardTitle>
              <CardDescription className="text-lg">
                Откройте интерактивную карту всех локаций
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Icon name="Map" size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-foreground/70">Интерактивная карта мира</p>
                </div>
              </div>
              <Button size="lg" className="w-full">
                <Icon name="Map" size={20} className="mr-2" />
                Открыть Карту
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default World;