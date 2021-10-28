import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios);

mock.onGet('/change1').reply(200, {
  temperature: [
    { item: 'item-9', temperature: 27 },
    { item: 'item-10', temperature: 31 },
    { item: 'item-11', temperature: 26 },
    { item: 'item-12', temperature: 26 },
    { item: 'item-13', temperature: 28 },
    { item: 'item-14', temperature: 0 },
  ],
  comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugit, ipsum quisquam harum explicabo doloribus reprehenderit modi asperiores quaerat sit dignissimos accusantium nesciunt maiores quasi obcaecati aliquam vitae quae molestiae!',
  shipment: [
    {
      input1: [
        { item: 'item-6', data: 'толуол', key: 'product' },
        { item: 'item-7', data: '1203716 FAVU', key: 'number' },
        { item: 'item-8', data: 'Lorem', key: 'name' },
        { item: 'item-9', data: '1', key: 'weight' },
      ]
    },
  ]
});

mock.onGet('/change2').reply(200, {
  temperature: [
    { item: 'item-9', temperature: 47 },
    { item: 'item-10', temperature: 31 },
    { item: 'item-11', temperature: 36 },
    { item: 'item-12', temperature: 26 },
    { item: 'item-13', temperature: 48 },
    { item: 'item-14', temperature: 10 },
  ],
  comment: 'Lorem ipsum dolor ',
  shipment: [
    {
      input1: [
        { item: 'item-6', data: 'толуол', key: 'product' },
        { item: 'item-7', data: 'FAVU 1203716', key: 'number' },
        { item: 'item-8', data: '', key: 'name' },
        { item: 'item-9', data: '7', key: 'weight' },
      ]
    },
  ]
});

export const fetchData = (change) => (dispatch) => {
  // axios.get(`/report`)
  axios.get(`/${change}`)
    .then(function (response) {
      // console.log(response.data);
      dispatch(setData(response.data))
    });
}

export const setData = (items) => ({
  type: 'SET_DATA',
  payload: items,
})