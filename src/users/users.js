import { Datagrid, Edit, List, Create, SimpleForm, TextField, TextInput, PasswordInput } from "react-admin";

export const UserList = (data) => (
    <List>
        <Datagrid data={data.data} rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="password" />
        </Datagrid>
    </List>
);

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <PasswordInput source="password" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <PasswordInput source="password" />
        </SimpleForm>
    </Create>
);

