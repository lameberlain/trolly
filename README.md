# react-dnd where there are two dnd components:
- column: `dropTarget` only. dropping here fires redux action to push the item to the end of the column array
- task: `dragSource` and `dropTarget`. dragging a task to another task will place the dropped task before the task on which it is dropped