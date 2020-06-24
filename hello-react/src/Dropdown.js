import styles from './Dropdown.module.css';
import React, { Component } from 'react';

class Dropdown extends Component {
  state = {
    showMenu: false,
  };
  handleClickSelected = () => {
    const { showMenu } = this.state;
    this.setState({
      showMenu: !showMenu,
    });
  };
  handleClickItem = (item) => {
    const { onSelected = () => {} } = this.props;
    this.setState({
      showMenu: false,
    });
    onSelected(item);
  };
  render() {
    const { showMenu } = this.state;
    let { items = [], selected,  } = this.props;

    if (!selected && items.length) {
      selected = items[0];
    }

    return (
      <div className={styles.host}>
        <div className={styles.selected} onClick={this.handleClickSelected}>
          {selected}
        </div>
        {showMenu && (
          <div className={styles.menu}>
            {items.map((val) => (
              <div
                key={val}
                className={styles.item}
                onClick={() => this.handleClickItem(val)}
              >
                {val}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
