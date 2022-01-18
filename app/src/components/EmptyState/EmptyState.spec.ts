import { shallowMount } from '@vue/test-utils'
import EmptyState from './EmptyState.vue'

describe('EmptyState.vue', () => {
  const image = '/image.jpg'
  const title = 'Empty list'
  const text = 'Create now your to-do list!'

  it('renders title and text props', () => {
    const wrapper = shallowMount(EmptyState, {
      props: { title, text }
    })
    expect(wrapper.find('.empty-state__image').exists()).toBeFalsy()
    expect(wrapper.find('.empty-state__title').text()).toMatch(title)
    expect(wrapper.find('.empty-state__text').text()).toMatch(text)
    expect(wrapper.find('.empty-state__children').exists()).toBeFalsy()
  })

  it('renders image, title and text props', () => {
    const wrapper = shallowMount(EmptyState, {
      props: { image, title, text }
    })
    expect(wrapper.find('.empty-state__image img').attributes('src'))
      .toMatch(image)
    expect(wrapper.find('.empty-state__title').text()).toMatch(title)
    expect(wrapper.find('.empty-state__text').text()).toMatch(text)
    expect(wrapper.find('.empty-state__children').exists()).toBeFalsy()
  })

  it('renders title and text props and slot', () => {
    const wrapper = shallowMount(EmptyState, {
      props: { title, text },
      slots: {
        default: '<a href="">Create</a>'
      }
    })
    expect(wrapper.find('.empty-state__image').exists()).toBeFalsy()
    expect(wrapper.find('.empty-state__title').text()).toMatch(title)
    expect(wrapper.find('.empty-state__text').text()).toMatch(text)
    expect(wrapper.find('.empty-state__children').exists()).toBeTruthy()
  })
})
