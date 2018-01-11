import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, Card, Button, CardSection, Spinner, Input, Header } from './components/common/';
import data from './TodoList.json';


class App extends Component {
    state = { name: '', description: '', dueDate: '' };

    onButtonPress() {
        const { name, description, dueDate } = this.state;

        data.push({ name, description, dueDate });
    }

    renderButton() {
        if (this.state.loading) {
          return <Spinner size="small" />;
        }
    
        return (
          <Button onPress={this.onButtonPress.bind(this)}>
            Add
          </Button>
        );
      }

    render() {
        return (
            <ScrollView style={{ flex: 1, paddingTop: 30 }}>
                <Card>
                    <CardSection>
                        <Header headerText="TodoApp" />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Add a todo"
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Add a description"
                            value={this.state.description}
                            onChangeText={description => this.setState({ description })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Add a due date"
                            value={this.state.dueDate}
                            onChangeText={dueDate => this.setState({ dueDate })}
                        />
                    </CardSection>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>

                    <CardSection>
                        <ListItem data={data} />
                    </CardSection>
                </Card>
            </ScrollView>
        );
    }
  
  }

export default App;
