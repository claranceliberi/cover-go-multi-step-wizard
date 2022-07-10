import { mount } from '@vue/test-utils'

import SelectMoleculeVue from '../../../src/components/molecules/input/SelectMolecule.vue'

describe('SelectMolecule.vue', () => {
  const data: SelectionType[] = [
    { value: 'test', label: 'test' },
    { value: 'tes1', label: 'test1' },
    { value: 'test2', label: 'test2' },
  ]

  it('Should have the same number of input option element as number of provided options', async () => {
    let wrapper = mount(SelectMoleculeVue, {
      props: {
        options: data,
      },
    })

    const inputs = wrapper.findAll('option')
    expect(inputs.length).toBe(data.length + 1)
  })
})
