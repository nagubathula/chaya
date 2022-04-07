import React, {useEffect, useState} from 'react';

import { addDecorator, Meta, Story } from '@storybook/react';
import { SearchBox } from '../src';
import ThemeContext from "../src/ThemeProvider";

addDecorator((story) => (
    <ThemeContext>
        {story()}
    </ThemeContext>
));

const meta: Meta = {
    title: 'User Inputs/SearchBox',
    component: SearchBox,
    argTypes: {
        onSearch: { action: 'search' },
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story = args => {

    const [keyword, setKeyword] = useState(args?.keyword ?? '');

    useEffect(() => {
        setKeyword(args?.keyword ?? '');
    }, [args?.keyword]);

    return (
        <div style={{ width: '650px', maxWidth: '100%' }}>
            <SearchBox  {...args} keyword={keyword} setKeyword={setKeyword} />
        </div>
    );
}

export const Default = Template.bind({});

Default.args = {
    keyword: ``
};