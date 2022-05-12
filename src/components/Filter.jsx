import React from 'react'
import { Checkbox } from 'antd';


export default function Filter(props) {
    const CheckboxGroup = Checkbox.Group;

    const plainOptions = props.filters;
    const [indeterminate, setIndeterminate] = React.useState(false);
    const [checkAll, setCheckAll] = React.useState(false);
    
    const onChange = list => {
        props.handleFilter(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = e => {
        props.handleFilter(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };
    return (
        <div className="filterBar">
            <div className="categoriesBar">
                {props.filters.length > 1 ?
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll} >
                        All Categories
                    </Checkbox> : null}
                <CheckboxGroup options={plainOptions} value={props.activeFilters} onChange={onChange} />
            </div>
        </div>)
}
