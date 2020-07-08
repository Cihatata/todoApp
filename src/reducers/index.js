import I from 'immutable';

const INITIAL_STATE = {
  ifClickEvent: 0,
  ifClickGroup: 0,
  groupNameInput: '',
  eventHeader: '',
  eventContent: '',
  eventTags: '2',
  eventDate: '',
  eventGroupName: 'Okul',
  // todo Buradaki Default deger dinamiklesecek
  groups: [
    {
      groupId: 1,
      groupName: 'Okul',
      cards: [
        {
          header: 'Odev',
          text: 'Okul Odevlerini Yapmayi iniutma',
          imgSrc: '',
          date: '29-06-2020',
          tags: 1,
        },
        {
          header: 'Proje Teslimi',
          text: 'Oyun Programlama odevi teslim edilecek',
          imgSrc: '',
          date: '30-06-2020',
          tags: 1,
        },
      ],
    },
    {
      groupId: 2,
      groupName: 'Is',
      cards: [
        {
          header: 'Scrum Bulusmasi',
          text: 'Okul Odevlerini Yapmayi Unutma',
          imgSrc: '',
          date: '29-06-2020',
          tag: 2,
        },
      ],
    },
    {
      groupId: 3,
      groupName: 'Haftasonu',
      cards: [
        {
          header: 'Piknik',
          text:
            'aOkul arkadaslari ile beraber piknige gidilecek. Haftasonuna kadar isleri hallet',
          imgSrc: '',
          date: '01-07-2020',
          tag: 3,
        },
      ],
    },
    {
      groupId: 4,
      groupName: 'E-spor',
      cards: [],
    },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HANDLE_CHANGE':
      return { ...state, [action.name]: action.value };
    case 'ADD_GROUP': {
      const { groups, groupNameInput, ifClickGroup } = state;
      const lastGroup = groups[groups.length - 1];
      const newGroupId = lastGroup.groupId + 1;
      const newGroups = {
        groupId: newGroupId,
        groupName: groupNameInput,
        cards: [],
      };
      return {
        ...state,
        groups: [...state.groups, newGroups],
        ifClickGroup: false,
      };
    }
    case 'SHOW_FORM': {
      // console.log(action.name);
      const { ifClickEvent, ifClickGroup } = state;
      let val;
      if (action.name === 'ifClickEvent') {
        val = ifClickEvent;
      } else if (action.name === 'ifClickGroup') {
        val = ifClickGroup;
      }
      return { ...state, [action.name]: !val };
    }
    case 'HANDLE_SUBMIT': {
      console.log('submit', state);
      const {
        groups,
        eventHeader,
        eventContent,
        eventDate,
        eventTags,
        eventGroupName,
      } = state;
      let index;
      groups.map((val, i) => {
        if (val.groupName === eventGroupName) {
          index = i;
        }
      });
      const newCard = {
        header: eventHeader,
        text: eventContent,
        imgSrc: '',
        date: eventDate,
        tag: eventTags,
      };
      const oldCard = groups[index].cards;
      const test = oldCard.push(newCard);
      return {
        ...state,
        groups: [...state.groups],
        ifClickEvent: false,
        eventHeader: '',
        eventContent: '',
        eventDate: '',
        eventTags: 2,
        eventGroupName: 'Okul',
      };
    }
    default:
      return state;
  }
};
export default reducer;
