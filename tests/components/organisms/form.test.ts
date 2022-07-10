import { mount } from '@vue/test-utils'

import FormOrganismVue from '../../../src/components/organisms/multi-steps/FormOrganism.vue'
import { key } from '../../../src/constants/constants'

describe('FormOrganism.vue', () => {
  const fn = jest.fn()

  it('Should calculate premium when age entered', async () => {
    let wrapper = mount(FormOrganismVue, {
      global: {
        provide: {
          key: {
            info: {
              name: '',
              age: 0,
              country: '',
              package: 'Standard',
            },
            updateInfo: fn,
          },
        },
      },
    })

    const age = 10

    await wrapper.find('input[type=number]').setValue(age)
    const content = wrapper.find('p')
    expect(content.text()).toContain(age * 10 + ' HKD')
  })

  it('Should calculate premium when different country or different plan are selected', async () => {
    let wrapper = mount(FormOrganismVue, {
      global: {
        provide: {
          key: {
            info: {
              name: '',
              age: 0,
              country: '',
              package: 'Standard',
            },
            updatePremium: fn,
          },
        },
      },
    })

    wrapper.vm.$watch = fn

    const age = 10
    const country = {
      name: 'USA',
      discount: 50,
      currency: 'USD',
      rate: 2,
    }

    await wrapper.find('input[type=number]').setValue(age)

    // select country
    const select = wrapper.find<HTMLSelectElement>('select')
    select.findAll('option').at(2)!.element.selected = true
    await select.trigger('input')

    // select package
    const _package = wrapper
      .findAll<HTMLInputElement>('input[type=radio]')
      .at(1)
    _package!.element.checked = true
    await _package?.trigger('input')

    const content = wrapper.find('p')
    const total = age * 10 * country.rate
    const discount = (total * country.discount) / 100
    const expectations = total + discount + ' ' + country.currency
    expect(content.text()).toContain(expectations)
  })
})
