export const formConfig: IformItem[] = [
    {
        filed: 'parent',
        label: '父级',
        type: 'select',
        select: {
            options: [
                { label: 'option1', value: 123 },
                { label: 'option2', value: 34 }
            ]
        }
    },
    {
        filed: 'type',
        label: '类型',
        type: 'select',
        select: {
            options: [
                { label: 'menu', value: 'menu' },
                { label: 'link', value: 'link' }
            ]
        }
    },
    {
        filed: 'path',
        label: '路径',
        type: 'input',
        rules: [{ required: true, message: '路径不能为空', trigger: 'blur' }]
    },
    { filed: 'name', label: '名称', type: 'input' },
    { filed: 'title', label: '标题', type: 'input' },
    {
        filed: 'component',
        label: '文件路径',
        type: 'input',
        rules: [{ required: true, message: '文件路径不能为空', trigger: 'blur' }]
    },
    { filed: 'icon', label: '图标', type: 'input', placeholder: 'elementplus图标名' },
    {
        filed: 'isHidden',
        label: '是否隐藏',
        type: 'radio',
        radio: {
            options: [
                {
                    label: '是',
                    value: true
                },
                {
                    label: '否',
                    value: false
                }
            ]
        }
    }
];
