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
          tags: 2,
        },
        {
          header: 'Proje Teslimi',
          text: 'Oyun Programlama odevi teslim edilecek',
          imgSrc: '',
          date: '30-06-2020',
          tags: 2,
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
    case 'HANDLE_CHANGE': {
      const stateImmutable = I.Map(state);
      const newState = stateImmutable.set(action.name, action.value);
      // console.log('new', newState);
      return newState;
    }
    case 'ADD_GROUP': {
     //  const { groups, groupNameInput } = I.Map(state).toJS();
      const groups = I.List(I.Map(state).get('groups', [' '])).toJS();
      const groupNameInput = I.Map(state).get('groupNameInput', ' ');
      const lastGroup = groups[groups.length - 1];
      let newGroupId;
      if (lastGroup) {
        // Eger Group'larin hepsi silindiyse
        newGroupId = lastGroup.groupId + 1;
      } else {
        newGroupId = 0;
      }
      const newGroups = {
        groupId: newGroupId,
        groupName: groupNameInput,
        cards: [],
      };
      const immutableGroups = I.List(groups).push(newGroups);
      return {
        groups: immutableGroups,
        ifClickGroup: false,
        ifClickEvent: false,
        groupNameInput: '',
        eventHeader: '',
        eventContent: '',
        eventTags: '2',
        eventDate: '',
        eventGroupName: 'Okul',
      };
    }
    case 'SHOW_FORM': {
      // console.log(action.name);
      const stateImmutable = I.Map(state);
      // const { ifClickEvent, ifClickGroup } = stateImmutable.toJS();
      const ifClickEvent = stateImmutable.get('ifClickEvent', 'err');
      const ifClickGroup = stateImmutable.get('ifClickGroup', 'err');
      // console.log('if', ifClickEvent);
      let val;
      if (action.name === 'ifClickEvent') {
        val = ifClickEvent;
      } else if (action.name === 'ifClickGroup') {
        val = ifClickGroup;
      }
      const newState = stateImmutable.set(action.name, !val);
      console.log(newState.toJS());
      return newState;
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
      } = I.Map(state).toJS();
      let index;
      console.log(groups);
      groups.map((val, i) => {
        // eventGroupName Bos gelebiliyor.
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
      const oldCards = I.Map(I.List(groups).get(index)).get('cards');
      const newCards = I.List(oldCards).push(newCard);
      const xd = I.Map(I.List(groups).get(index, 0)).update('cards', val => newCards);
      let newGroups = groups.map((val, i) => {
        if (i === index) {
          return xd.toJS();
        }
        return val;
      });
      console.log('new', groups);
      return {
        ...state,
        groups: newGroups, // Guncellenmis kolonu gecmem lazim.
        ifClickEvent: false,
        ifClickGroup: false,
        eventHeader: '',
        eventContent: '',
        eventDate: '',
        eventTags: 2,
        eventGroupName: 'Okul',
      };
    }
    case 'DELETE_COLON': {
      const groups = I.List(I.Map(state).get('groups', [' ']));
      const newGroups = groups.delete(action.groupId);
      console.log(newGroups.toJS());
      return { ...state, groups: newGroups };
    }
    case 'DELETE_CARD': {
      const groups = I.List(I.Map(state).get('groups', [' '])).toJS();
      console.log(action.groupId);
      console.log(action.cardIndex);
      let index;
      groups.map((val, i) => {
        // eventGroupName Bos gelebiliyor.
        if (val.groupId === action.groupId) {
          index = i;
        }
      });
      console.log('groups', groups);
      console.log('index', index);
      const cards = I.Map(I.List(groups).get(index), 0).get('cards', [' ']);
      const newCards = I.List(cards).delete(action.cardIndex);
      const newGroup = I.Map(I.List(groups).get(index, 0)).update('cards', val => newCards);
      const responseGroup = groups.map((val, i) => {
        if (index === i) {
          return newGroup.toJS();
        }
        return val;
      });
      console.log('cards', cards);
      console.log('newGroup', newGroup.toJS());
      // groups[index].cards.splice(action.cardIndex, 1);
      // console.log('oldCard', oldCard);
      // oldCard.splice(action.cardIndex, 1);
      console.log('newCard', newCards.toJS());
      return {
        ...state,
        groups: responseGroup,
      };
    }
    default:
      return state;
  }
};
export default reducer;
