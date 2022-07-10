import { mount } from '@vue/test-utils'
import RadioMoleculeVue from '../../../src/components/molecules/input/RadioMolecule.vue'

describe('RadioMolecule.vue', () => {
  const data: SelectionType[] = [
    { value: 'test', label: 'test' },
    { value: 'tes1', label: 'test1' },
    { value: 'test2', label: 'test2' },
  ]

  it('Should have the same number of input radio as number of provided options', async () => {
    let wrapper = mount(RadioMoleculeVue, {
      props: {
        options: data,
      },
    })

    const inputs = wrapper.findAll('input')
    expect(inputs.length).toBe(data.length)
  })
})
