const checksheet_container = 
{
    props:
    {
        items:
        {
            type: Object
        },

        parentItem:
        {
            type: Object
        },
    },

    data()
    {
        return {
            
        }
    },

    methods:
    {
        test(e)
        {
            console.log(this.parentItem);
        },

        isChecked(e)
        {
            //if (this.parentItem != null) return false;
            console.log(this.parentItem, e);
            return this.parentItem != null && !this.parentItem.value;

            // if (this.type == "checkbox")
            // {
            //     console.log(this.value);
            //     return this.value;
            // }

            // let parent = this.parentItem;
            // if (parent == null) return false;

            // while (parent.type != "radio")
            // {
            //     parent = parent.parentItem;
            //     if (parent == null) return false;
            // }

            
            // console.log(parent);


        },

        radio_onChange(e)
        {
            console.log(e, this);
        },

        isDisabled(item)
        {
            console.log(item);

            return this.isChecked();

            let a ;

            console.log(this.parentItem);

            if (this.parentItem != null) console.log(this.parentItem.checked);
            return this.parentItem != null && !this.parentItem.checked;
        },
    },

    template:`
        <ul>
            <li v-for="(item, index) in items" :key="item">

                <template v-if="item.type=='' || item.type == null">
                    <label>
                        {{item.caption}}
                    </label>
                </template>

                <template v-if="item.type=='checkbox'">
                    <label>
                        <input type="checkbox" v-model="item.value" :disabled="isDisabled(item)">
                        {{item.caption}}
                    </label>
                </template>

                <template v-if="item.type=='textbox'">
                    <div>{{ item.caption }}</div>
                    <div v-if="item.value != null && item.value.length == 0">*入力必須</div>
                    <input v-model="item.value" :disabled="isDisabled(item)">
                </template>

                <template v-if="item.type=='radio'">
                    <div>{{item.caption}}</div>

                    <div v-for="sel in item.selecter">
                        <div>
                            
                            <label>
                                <input type="radio" v-model="item.value" :value="sel.caption" >
                                {{sel.caption}}
                            </label>

                            <template v-if="sel.items != null && sel.items.length > 0">
                                <checksheetContainer :items="sel.items" :parentItem="item" ></checksheetContainer>
                            </template>

                        </div>
                    </div>
                    
                </template>

                <input type="button" @click="isChecked">

                <template v-if="item.items != null && item.items.length > 0">
                    <checksheetContainer :items="item.items" :parentItem="item"></checksheetContainer>
                </template>

            </li>
        </ul>


    `
}