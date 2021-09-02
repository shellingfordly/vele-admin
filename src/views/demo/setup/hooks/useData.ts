import { reactive } from '@vue/reactivity';

export function useData() {
  const data = reactive({
    name: 'Tom',
    age: 18,
  })

  const setName = (val: string) => {
    data.name = val
  }


  const setAge = (val: number) => {
    data.age = val
  }

  return {
    data,
    setName,
    setAge
  }
}

export const bbb = 'bbbbbbbbbbb'