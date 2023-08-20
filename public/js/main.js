const insertFollowerDom = (data) => {
  const followersContainer = document.querySelector('#followers .container');

  const card = document.createElement('article');
  card.className = 'card';

  const cardImageContainer = document.createElement('div');
  const socialIcon = document.createElement('img');
  const username = document.createElement('p');

  socialIcon.src = `${data.icon}`;
  username.innerHTML = `${data.username}`;

  cardImageContainer.className = 'card-img';
  cardImageContainer.appendChild(socialIcon);
  cardImageContainer.appendChild(username);

  const cardDescription = document.createElement('div');
  const followerCount = document.createElement('h1');
  const followerLabel = document.createElement('p');

  followerCount.innerHTML = `${data.followers}`;
  followerLabel.innerHTML = `follower`.toUpperCase();

  cardDescription.className = 'card-description';
  cardDescription.appendChild(followerCount);
  cardDescription.appendChild(followerLabel);

  const cardDate = document.createElement('div');
  const arrowIcon = document.createElement('img');
  const updateCount = document.createElement('p');

  arrowIcon.src = `${data.arrowIcon}`;
  updateCount.innerHTML = `${data.updateCount} Today`;

  cardDate.className = 'card-date';
  cardDate.appendChild(arrowIcon);
  cardDate.appendChild(updateCount);

  card.appendChild(cardImageContainer);
  card.appendChild(cardDescription);
  card.appendChild(cardDate);

  followersContainer.appendChild(card);
};

const insertOverviewDom = (data) => {
  const overviewsContainer = document.querySelector('#overviews .container');

  const card = document.createElement('article');
  card.className = 'card';

  const pageViewedContainer = document.createElement('div');
  const pageViewLabel = document.createElement('p');
  const pageViewedCount = document.createElement('h1');

  pageViewedContainer.className = 'page-viewed';
  pageViewLabel.innerHTML = `${data.title}`;
  pageViewedCount.innerHTML = `${data.total}`;

  pageViewedContainer.appendChild(pageViewLabel);
  pageViewedContainer.appendChild(pageViewedCount);

  const overviewPercentageContainer = document.createElement('div');
  const socialIcon = document.createElement('img');
  const percentageContainer = document.createElement('div');
  const percentageIcon = document.createElement('img');
  const percentage = document.createElement('p');

  socialIcon.src = `${data.icon}`;
  percentageIcon.src = `${data.arrowIcon}`;
  percentage.innerHTML = `${data.percentage}%`;

  percentageContainer.className = 'percentage';
  percentageContainer.appendChild(percentageIcon);
  percentageContainer.appendChild(percentage);

  overviewPercentageContainer.className = 'overview-percentage';
  overviewPercentageContainer.appendChild(socialIcon);
  overviewPercentageContainer.appendChild(percentageContainer);

  card.appendChild(pageViewedContainer);
  card.appendChild(overviewPercentageContainer);

  overviewsContainer.appendChild(card);
};

const displayFollower = (args) => {
  args.forEach((follower) => {
    insertFollowerDom(follower);
  });
};
const displayOverview = (args) => {
  return args.forEach((view) => {
    insertOverviewDom(view);
  });
};

const initApp = () => {
  const totalFollowers = [
    {
      username: '@nathanf',
      followers: 1987,
      updateCount: 12,
      icon: './public/image/icon-facebook.svg',
      arrowIcon: './public/image/icon-up.svg',
    },
    {
      username: '@nathanf',
      followers: 1044,
      updateCount: 99,
      icon: './public/image/icon-twitter.svg',
      arrowIcon: './public/image/icon-up.svg',
    },
    {
      username: '@realnathanf',
      followers: '11k',
      updateCount: 1099,
      icon: './public/image/icon-instagram.svg',
      arrowIcon: './public/image/icon-up.svg',
    },
    {
      username: 'Nathan F.',
      followers: 8239,
      updateCount: 144,
      icon: './public/image/icon-youtube.svg',
      arrowIcon: './public/image/icon-up.svg',
    },
  ];

  const overView = [
    {
      title: 'Page Views',
      total: 87,
      percentage: 3,
      icon: './public/image/icon-facebook.svg',
      arrowIcon: './public/image/icon-up.svg',
    },
    {
      title: 'Likes',
      total: 52,
      percentage: 2,
      icon: './public/image/icon-facebook.svg',
      arrowIcon: './public/image/icon-down.svg',
    },
    {
      title: 'Likes',
      total: 5462,
      percentage: 2257,
      icon: './public/image/icon-instagram.svg',
      arrowIcon: './public/image/icon-up.svg',
    },

    {
      title: 'Profile Views',
      total: '52k',
      percentage: 1375,
      icon: './public/image/icon-instagram.svg',
      arrowIcon: './public/image/icon-up.svg',
    },
    {
      title: 'Retweets',
      total: 117,
      percentage: 303,
      icon: './public/image/icon-twitter.svg',
      arrowIcon: './public/image/icon-up.svg',
    },
    {
      title: 'Likes',
      total: 507,
      percentage: 553,
      icon: './public/image/icon-twitter.svg',
      arrowIcon: './public/image/icon-up.svg',
    },
    {
      title: 'Likes',
      total: 107,
      percentage: 19,
      icon: './public/image/icon-youtube.svg',
      arrowIcon: './public/image/icon-down.svg',
    },
    {
      title: 'Total Views',
      total: 1407,
      percentage: 12,
      icon: './public/image/icon-youtube.svg',
      arrowIcon: './public/image/icon-down.svg',
    },
  ];

  displayFollower(totalFollowers);
  displayOverview(overView);
};

addEventListener('DOMContentLoaded', () => {
  initApp();

  const theme = localStorage.getItem('theme');
  const dark = 'dark';
  const light = 'light';

  const defaultTheme = light;
  let activeMode = defaultTheme === dark;
  const toggleBtn = document.getElementById('mode');

  console.log(toggleBtn);

  if (theme !== null && theme === dark) {
    toggleBtn.checked = true;
  }
  const activateMode = (theme) => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);

    activeMode = theme === dark;
  };

  if (theme === dark) activateMode(dark);
  if (theme === light) activateMode(light);

  function preferTheme(theme) {
    return `(prefers-color-scheme: ${theme})`;
  }

  if (!theme) {
    if (window.matchMedia(preferTheme(dark)).matches) {
      activateMode(dark);
      localStorage.setItem('theme', dark);
    } else if (window.matchMedia(preferTheme(light)).matches) {
      activateMode(light);
      localStorage.setItem('theme', light);
    } else {
      activateMode(defaultTheme);
      localStorage.setItem('theme', defaultTheme);
    }

    window.matchMedia(preferTheme(dark)).addEventListener('change', (event) => {
      if (event.matches) {
        activateMode(dark);
        localStorage.setItem('theme', dark);
      }
    });
    window.matchMedia(preferTheme(light)).addEventListener('change', (event) => {
      if (event.matches) {
        activateMode(light);
        localStorage.setItem('theme', light);
      }
    });
  }

  if (toggleBtn) {
    toggleBtn.style.visibility = 'visible';

    toggleBtn.addEventListener(
      'change',
      () => {
        if (activeMode) {
          activateMode(light);
          localStorage.setItem('theme', light);
        } else {
          activateMode(dark);
          localStorage.setItem('theme', dark);
        }
      },
      true
    );
  }
});
