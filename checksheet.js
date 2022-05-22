const test1 = 
{
    data()
    {
        return {
            title: "ABC",
            items:
            [
                {
                    caption: "test",
                    type: "checkbox",
                    value: false,
                    is_requied: false,
                    items:
                    [
                        { 
                            caption: "test-1",
                            type: "textbox",
                        }
                    ]
                },

                {
                    caption: "test2",
                    type: "textbox",
                    value: "aa",
                    is_requied: false,
                    items:[]
                },

                {
                    caption: "radiotest1",
                    type: "radio",
                    value: "",
                    is_requied: false,
                    selecter:
                    [
                        {
                            caption: "test1",
                            value: false,
                            items:
                            [
                                {
                                    caption: "radiotest2",
                                    type: "radio",
                                    value: "",
                                    is_requied: false,
                                    selecter:
                                    [
                                        {
                                            caption: "test1",
                                            value: false,
                                            items:
                                            [
                                                {
                                                    caption: "test1_選択",                                    
                                                }
                                            ]
                                        },
                
                                        {
                                            caption: "test2",
                                            value: false,
                                        },
                
                                        {
                                            caption: "test3",
                                            value: false,
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            caption: "test2",
                            value: false,
                            items:
                            [
                                {
                                    caption: "あいうえお",
                                    type: "textbox",
                                    value: "AIEUO"
                                }
                            ]
                        },

                        {
                            caption: "test3",
                            checked: false,
                        }
                    ]
                },

 
            ]
        }
    },

    methods:
    {
        a()
        {
            console.log(this.items);
        }
    },

    template:`
        <div>{{ title }}</div>        
        <checksheetContainer :items="items"></checksheetContainer>
        <input type="button" @click="a">
    `
};