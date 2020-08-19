import Vue from 'vue';

import { Button, Input, Carousel, CarouselItem, Message } from 'element-ui';

Vue.use(Button);
Vue.use(Input);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.prototype.$message = Message;