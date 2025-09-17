import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Guilds = () => {
  const guilds = [
    {
      id: 1,
      name: 'Орден Железного Кулака',
      type: 'Военная',
      members: 342,
      level: 47,
      logo: '⚔️',
      description: 'Элитная гильдия воинов, специализирующаяся на PvP сражениях и защите слабых',
      requirements: 'Уровень 25+, класс Воин',
      benefits: ['Бонус к урону +15%', 'Доступ к эксклюзивным квестам', 'Скидки в лавке гильдии'],
      rating: 4850,
      activity: 95
    },
    {
      id: 2,
      name: 'Круг Звёздных Магов',
      type: 'Магическая',
      members: 198,
      level: 52,
      logo: '🔮',
      description: 'Таинственная организация изучающая древние заклинания и артефакты',
      requirements: 'Уровень 30+, класс Маг, экзамен по магии',
      benefits: ['Ускоренное изучение заклинаний', 'Доступ к библиотеке магии', 'Бонус к мане +20%'],
      rating: 5120,
      activity: 88
    },
    {
      id: 3,
      name: 'Братство Теней',
      type: 'Воровская',
      members: 156,
      level: 38,
      logo: '🗡️',
      description: 'Скрытная гильдия мастеров infiltrации и стелс-операций',
      requirements: 'Уровень 20+, класс Вор, тест на ловкость',
      benefits: ['Бонус к скрытности +25%', 'Информационная сеть', 'Спецзаказы на кражи'],
      rating: 4200,
      activity: 78
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Военная': return 'bg-red-500';
      case 'Магическая': return 'bg-blue-500';
      case 'Воровская': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getActivityColor = (activity: number) => {
    if (activity >= 90) return 'text-green-500';
    if (activity >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="fantasy-title text-5xl font-bold text-primary mb-4">
            🛡️ Гильдии
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Присоединись к могущественным гильдиям и завоевывай славу вместе с союзниками
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {guilds.map((guild) => (
            <Card key={guild.id} className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`${getTypeColor(guild.type)} text-white`}>
                    {guild.type}
                  </Badge>
                  <div className="text-3xl">{guild.logo}</div>
                </div>
                
                <CardTitle className="fantasy-title text-xl text-primary mb-2">
                  {guild.name}
                </CardTitle>
                
                <CardDescription className="text-foreground/70 mb-4">
                  {guild.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-foreground/70 mb-1">Участники</div>
                    <div className="font-semibold text-primary flex items-center">
                      <Icon name="Users" size={16} className="mr-1" />
                      {guild.members}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-foreground/70 mb-1">Уровень</div>
                    <div className="font-semibold text-primary">{guild.level}</div>
                  </div>
                  <div>
                    <div className="text-sm text-foreground/70 mb-1">Рейтинг</div>
                    <div className="font-semibold text-primary flex items-center">
                      <Icon name="Star" size={16} className="mr-1" />
                      {guild.rating.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-foreground/70 mb-1">Активность</div>
                    <div className={`font-semibold ${getActivityColor(guild.activity)}`}>
                      {guild.activity}%
                    </div>
                  </div>
                </div>

                {/* Activity Progress */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground/70">Активность гильдии</span>
                    <span className={`font-medium ${getActivityColor(guild.activity)}`}>
                      {guild.activity}%
                    </span>
                  </div>
                  <Progress value={guild.activity} className="h-2" />
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Icon name="Shield" size={16} className="mr-2" />
                    Требования
                  </h4>
                  <p className="text-sm text-foreground/80">{guild.requirements}</p>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <Icon name="Gift" size={16} className="mr-2" />
                    Преимущества
                  </h4>
                  <div className="space-y-1">
                    {guild.benefits.map((benefit, index) => (
                      <div key={index} className="text-sm text-foreground/80 flex items-start">
                        <Icon name="CheckCircle" size={12} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                  <Button className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Вступить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guild Creation */}
        <div className="text-center mb-16">
          <Card className="max-w-lg mx-auto bg-card/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="fantasy-title text-2xl text-primary">
                Создать Гильдию
              </CardTitle>
              <CardDescription>
                Основай собственную гильдию и стань её лидером
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-foreground/70">
                <div className="flex justify-between">
                  <span>Требования:</span>
                  <span>Уровень 30+, 50,000 золота</span>
                </div>
              </div>
              <Button size="lg" className="w-full">
                <Icon name="Plus" size={20} className="mr-2" />
                Создать Гильдию
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Guild Rankings */}
        <div className="text-center">
          <h2 className="fantasy-title text-3xl font-bold text-primary mb-8">
            🏆 Рейтинг Гильдий
          </h2>
          <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
            <Icon name="Trophy" size={20} className="mr-2" />
            Посмотреть Полный Рейтинг
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Guilds;