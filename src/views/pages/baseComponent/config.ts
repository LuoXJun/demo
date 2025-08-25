const validate = (rule: any, value: any, callback: any) => {
    if (value > 100) callback(new Error('数值过大'));
    else callback();
};

export const formConfig: IformItem[] = [
    {
        filed: 'select',
        label: 'select',
        type: 'select',
        select: {
            options: [
                { label: 'option1', value: 123 },
                { label: 'option2', value: 34 }
            ]
        }
    },
    { filed: 'date', label: 'date', type: 'date' },
    { filed: 'daterange', label: 'daterange', type: 'daterange' },
    { filed: 'slot', label: 'slot', type: 'slot' },
    {
        filed: 'input',
        label: 'input',
        type: 'input',
        rules: [{ required: true, message: '必填项', trigger: 'blur' }]
    },
    {
        filed: 'input2',
        label: 'input2',
        type: 'input',
        rules: [{ validator: validate, required: true, trigger: 'change' }]
    }
];
