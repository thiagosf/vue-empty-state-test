import EmptyState from './EmptyState.vue'
import '../../index.css'

export default {
  title: 'Components/EmptyState',
  component: EmptyState,
}

const Template = (args) => ({
  components: { EmptyState },
  setup() {
    return { args }
  },
  template: '<EmptyState v-bind="args" />',
})

const TemplateWithChildren = (args) => ({
  components: { EmptyState },
  setup() {
    return { args }
  },
  template: `
    <EmptyState v-bind="args">
      <a href="/" class="button inline-flex rounded-full bg-green-600 text-white py-2 px-4 font-bold text-sm uppercase transition-colors duration-200 hover:bg-green-700">Create my first one!</a>
    </EmptyState>
  `,
})

export const OnlyTitleText = Template.bind({})

OnlyTitleText.args = {
  title: 'Drop your files here',
  text: 'Or click to select',
}

export const WithImage = Template.bind({})

WithImage.args = {
  image: 'http://via.placeholder.com/640x360',
  imageWidth: 300,
  title: 'Not Found',
  text: 'This page does not exist',
}

export const WithChildren = TemplateWithChildren.bind({})

WithChildren.args = {
  title: 'Empty list',
  text: 'Start now creating your to-do list for free!',
}
