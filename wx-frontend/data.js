export const data =  {
  "user": {
    nickname: 'goddlts',
    icon: 'face0.webp'
  },
  recentFriends: [
    {
      id: 1,
      user: {
        nickname: 'Ring',
        icon: 'face2.webp',
      },
      messages: [
        {
          self: false,
          content: '晚上一起吃鸡？',
          time: '2021-09-15 07:50:30'
        },
        {
          self: true,
          content: 'OK',
          time: '2021-09-15 08:10:10'
        }
      ]
    },
    {
      id: 7,
      user: {
        nickname: 'meizi',
        icon: 'face1.webp',
      },
      messages: [
        {
          self: false,
          content: '亲爱的在么？',
          time: '2021-09-15 08:00:30'
        },
        {
          self: false,
          content: '晚上有空一起吃饭吧。',
          time: '2021-09-15 08:30:30'
        },
        {
          self: true,
          content: '没空，晚上加班！别打扰我！',
          time: '2021-09-15 08:40:14'
        },
        {
          self: true,
          content: '/::@',
          time: '2021-09-15 08:40:14'
        },
        {
          self: true,
          content: '/::@',
          time: '2021-09-15 08:40:14'
        }
      ]
    },
    {
      id: 10,
      user: {
        nickname: '大白机器人',
        icon: 'robot.webp',
      },
      messages: [
        {
          self: true,
          content: '给爷讲个笑话',
          time: '2021-09-15 10:00:10'
        },
        {
          self: false,
          content: '没空理你',
          time: '2021-09-15 10:00:40'
        }
      ]
    }
  ],
  "users": [
    {
      "id": 0,
      "letter": "J",
      "nickname": "教瘦",
      "icon": "face0.jpeg",
      "sex": "male",
      "summary": "没有留下内容",
      "remark": "教瘦",
      "area": "河北 邯郸",
      "wxid": "goddlts",
      "password": "123456"
    },
    {
      "id": 1,
      "letter": "A",
      "nickname": "阿玛尼",
      "icon": "face2.webp",
      "sex": "male",
      "summary": "没有留下内容",
      "remark": "阿玛尼",
      "area": "上海 浦东",
      "wxid": "aaa123",
      "password": "123456"
    },
    {
      "id": 2,
      "letter": "B",
      "nickname": "巴拉拉",
      "icon": "face3.webp",
      "sex": "male",
      "summary": "两只小蜜蜂啊，飞到花丛中啊",
      "remark": "巴拉拉",
      "area": "北京 昌平",
      "wxid": "balala123",
      "password": "123456"
    },
    {
      "id": 3,
      "letter": "D",
      "nickname": "大佬",
      "icon": "face10.webp",
      "sex": "male",
      "summary": "无",
      "remark": "大佬",
      "area": "北京 朝阳",
      "wxid": "dalao",
      "password": "123456"
    },
    {
      "id": 4,
      "letter": "F",
      "nickname": "法大大",
      "icon": "face10.webp",
      "sex": "male",
      "summary": "无",
      "remark": "法大大",
      "area": "北京 朝阳",
      "wxid": "fadadaxyz",
      "password": "123456"
    },
    {
      "id": 5,
      "letter": "J",
      "nickname": "佳佳",
      "icon": "face5.webp",
      "sex": "female",
      "summary": "美女老师佳佳",
      "remark": "佳佳",
      "area": "北京 朝阳",
      "wxid": "jiajia1998",
      "password": "123456"
    },
    {
      "id": 6,
      "letter": "J",
      "nickname": "叽叽叽叽",
      "icon": "face6.webp",
      "sex": "male",
      "summary": "无",
      "remark": "叽叽叽叽",
      "area": "北京 北京",
      "wxid": "jijijiij",
      "password": "123456"
    },
    {
      "id": 7,
      "letter": "M",
      "nickname": "美女",
      "icon": "face1.webp",
      "sex": "female",
      "summary": "美女无才便是德",
      "remark": "美女",
      "area": "北京 北京",
      "wxid": "meinv1990",
      "password": "123456"
    },
    {
      "id": 8,
      "letter": "M",
      "nickname": "萌萌",
      "icon": "face8.webp",
      "sex": "male",
      "summary": "无",
      "remark": "萌萌",
      "area": "北京 北京",
      "wxid": "mengmeng123",
      "password": "123456"
    },
    {
      "id": 9,
      "letter": "M",
      "nickname": "喵喵喵",
      "icon": "face7.webp",
      "sex": "male",
      "summary": "无",
      "remark": "喵喵喵",
      "area": "北京 北京",
      "wxid": "miaomiaomiao",
      "password": "123456"
    },
    {
      "id": 10,
      "letter": "D",
      "nickname": "大白机器人",
      "icon": "robot.webp",
      "sex": "robot",
      "summary": "我是一个聊天机器人",
      "remark": "大白机器人",
      "area": "中国 China",
      "wxid": "dabai",
      "password": "123456",
      "isRobot": true
    }
  ],
  "friends": [
    "0": [1, 2, 3, 5, 10],
    "1": [0, 1, 3, 4, 5, 8, 10]
  ],
  emojis: [
    { file: '100.gif', code: '/::)', title: '微笑',reg:/\/::\)/g },
    { file: '101.gif', code: '/::~', title: '伤心',reg:/\/::~/g },
    { file: '102.gif', code: '/::B', title: '美女',reg:/\/::B/g },
    { file: '103.gif', code: '/::|', title: '发呆',reg:/\/::\|/g },
    { file: '104.gif', code: '/:8-)', title: '墨镜',reg:/\/:8-\)/g },
    { file: '105.gif', code: '/::<', title: '哭',reg:/\/::</g },
    { file: '106.gif', code: '/::$', title: '羞',reg:/\/::\$/g },
    { file: '107.gif', code: '/::X', title: '哑',reg:/\/::X/g },
    { file: '108.gif', code: '/::Z', title: '睡',reg:/\/::Z/g },
    { file: '109.gif', code: '/::\'(', title: '哭',reg:/\/::'\(/g },
    { file: '110.gif', code: '/::-|', title: '囧',reg:/\/::-\|/g },
    { file: '111.gif', code: '/::@', title: '怒',reg:/\/::@/g },
    { file: '112.gif', code: '/::P', title: '调皮',reg:/\/::P/g },
    { file: '113.gif', code: '/::D', title: '笑',reg:/\/::D/g },
    { file: '114.gif', code: '/::O', title: '惊讶',reg:/\/::O/g },
    { file: '115.gif', code: '/::(', title: '难过',reg:/\/::\(/g },
    { file: '116.gif', code: '/::+', title: '酷',reg:/\/::\+/g },
    { file: '117.gif', code: '/:--b', title: '汗',reg:/\/:--b/g },
    { file: '118.gif', code: '/::Q', title: '抓狂',reg:/\/::Q/g },
    { file: '119.gif', code: '/::T', title: '吐',reg:/\/::T/g },
    { file: '120.gif', code: '/:,@P', title: '笑',reg:/\/:,@P/g },
    { file: '121.gif', code: '/:,@-D', title: '快乐',reg:/\/:,@-D/g },
    { file: '122.gif', code: '/::d', title: '奇',reg:/\/::d/g },
    { file: '123.gif', code: '/:,@o', title: '傲' ,reg:/\/:,@o/g},
    { file: '124.gif', code: '/::g', title: '饿',reg:/\/::g/g },
    { file: '125.gif', code: '/:|-)', title: '累' ,reg:/\/:\|-\)/g},
    { file: '126.gif', code: '/::!', title: '吓',reg:/\/::!/g },
    { file: '127.gif', code: '/::L', title: '汗',reg:/\/::L/g },
    { file: '128.gif', code: '/::>', title: '高兴',reg:/\/::>/g },
    { file: '129.gif', code: '/::,@', title: '闲',reg:/\/::,@/g },
    { file: '130.gif', code: '/:,@f', title: '努力',reg:/\/:,@f/g },
    { file: '131.gif', code: '/::-S', title: '骂',reg:/\/::-S/g },
    { file: '133.gif', code: '/:,@x', title: '秘密',reg:/\/:,@x/g },
    { file: '134.gif', code: '/:,@@', title: '乱',reg:/\/:,@@/g },
    { file: '135.gif', code: '/::8', title: '疯',reg:/\/::8/g },
    { file: '136.gif', code: '/:,@!', title: '哀',reg:/\/:,@!/g },
    { file: '137.gif', code: '/:!!!', title: '鬼',reg:/\/:!!!/g },
    { file: '138.gif', code: '/:xx', title: '打击',reg:/\/:xx/g },
    { file: '139.gif', code: '/:bye', title: 'bye',reg:/\/:bye/g },
    { file: '142.gif', code: '/:handclap', title: '鼓掌',reg:/\/:handclap/g },
    { file: '145.gif', code: '/:<@', title: '什么',reg:/\/:<@/g },
    { file: '147.gif', code: '/::-O', title: '累',reg:/\/::-O/g },
    { file: '153.gif', code: '/:@x', title: '吓',reg:/\/:@x/g },
    { file: '155.gif', code: '/:pd', title: '刀',reg:/\/:pd/g },
    { file: '156.gif', code: '/:<W>', title: '水果',reg:/\/:<W>/g },
    { file: '157.gif', code: '/:beer', title: '酒',reg:/\/:beer/g },
    { file: '158.gif', code: '/:basketb', title: '篮球',reg:/\/:basketb/g },
    { file: '159.gif', code: '/:oo', title: '乒乓',reg:/\/:oo/g }
  ],
}