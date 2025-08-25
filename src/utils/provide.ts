import { ref, type InjectionKey, type Ref } from 'vue';

export const getType: InjectionKey<{ value: Ref<TlogType>; setValue(val: TlogType): void }> =
    Symbol();

export const getTypeDefault = {
    value: ref('login'),
    setValue(val: TlogType) {}
};
