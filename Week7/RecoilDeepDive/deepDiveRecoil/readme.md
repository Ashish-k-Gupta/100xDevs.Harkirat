# Recoil deep dive

### Basic
Atoms, selectors, Asynchronous data queries, 
useRecoilState, useRecoilValue, useSetRecoilState

#### Atoms: Atoms are units of state. They're updatable and subscribable: when an atom is updated, each subscribed component is re-rendered with the new value. They can be created at runtime, too. Atoms can be used in place of React local component state. If the same atom is used from multiple components, all those components share their state.

#### Selctors: A selector represents a piece of derived state. You can think of derived state as the output of passing state to a pure function that derives a new value from the said state.

#### Derived state is a powerful concept because it lets us build dynamic data that depends on other data. In the context of our todo list application, the following are considered derived state:


#### Asynchronous data queries: 


### Advance
atomFamily, selectorFamily, useRecoilStateLoadable, useRecoilValueLoadable

