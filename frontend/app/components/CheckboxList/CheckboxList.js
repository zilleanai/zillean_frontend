import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { bindRoutineCreators } from 'actions'
import { injectReducer, injectSagas } from 'utils/async'

import Checkbox from 'components/Checkbox';


import './checkbox-list.scss'

class CheckboxList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map(),
    }
    for (var key in props.defaultValue) {
      this.state.checkedItems.set(props.defaultValue[key], true)
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    const checkedItems = this.state.checkedItems.set(item, isChecked)
    this.setState({ checkedItems });
    this.props.onSelectItems(this.selectedToIndices(checkedItems));
  }

  selectedToIndices(checkedItems) {
    var ids = []
    checkedItems.forEach(function (value, key) {
      if (value == true) {
        ids.push(key)
      }
    }, checkedItems)
    return ids
  }

  render() {
    const { items } = this.props
    return (
      <ul className="items" >
        <div>
          {items.map((item, i) => {
            const active = this.state.checkedItems.get(item.toString())
            return (
              <li key={i} className={classnames('items-link', { active })} onClick={this.handleChange}>
                <Checkbox name={item.toString()} checked={this.state.checkedItems.get(item.toString())} onChange={this.handleChange} />
                {item + " "}
              </li>
            )
          }
          )}
        </div>
      </ul>
    )
  }
}


export default compose(
)(CheckboxList)
