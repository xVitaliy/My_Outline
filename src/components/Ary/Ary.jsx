import React from 'react';
import { Box, Button, ButtonGroup, Container, List, ListItem, Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom'
import { replace } from "formik";

const myStyle = {
    span: {
        color: 'red'
    }
}

const Ary = () => {
    const navigate = useNavigate();

    // navigate(-1) или (-1,-2,-3 иди 1,2,3) ди=вижение по истории на 1 2 или 3 страницы назад/вперед
    const goBack = () => navigate(-1)

    // Плохой вариант!! Такую навигацию лучше использовать в useEffect, если нужна кнопка => Link or NavLink
    // false - default - движение как по истории, усли нужна переадресация (не записывать движение в историю => true)
    // state - можно передать какой-то объект или строку, и потом куда я передам, я могу этот state прочитать!!!
    const goHome = () => navigate('/', { replace: false, state: 'state' })

    return (
        <Container>

            <Box sx={ { textAlign: 'center', mt: 5 } }>
                <ButtonGroup
                    variant={ 'contained' }>
                    <Button
                        onClick={ goBack }
                        color={ 'warning' }
                    >go_Back</Button>


                    <Button
                        onClick={ goHome }
                        color={ 'warning' }
                    >go_Home</Button>

                </ButtonGroup>
            </Box>

            <Box sx={ { mt: 5 } }>
                <Typography variant={ 'h3' }
                            component={ 'h3' }>
                    Array methods
                </Typography>
                <List sx={ myStyle }> Not Mutation
                    <ListItem>
                        <span>map</span> -- возвращает новый массив не изменяет старый
                    </ListItem>
                    <ListItem>
                        <span>filter</span> - фильтрует массив
                    </ListItem>
                    <ListItem>
                        <span>reduce</span> - применяет функцию reducer к каждому элементу массива (слева-направо),
                        возвращая одно результирующее значение.
                    </ListItem>
                    <ListItem>
                        <span>forEach</span> - перебирает массив, ничего не возвращает
                    </ListItem>
                    <ListItem>
                        <span>find</span> -Метод find() возвращает значение первого найденного в массиве элемента,
                        которое удовлетворяет условию переданному в callback функции. В противном случае возвращается
                        undefined.
                    </ListItem>
                    <ListItem>
                        <span>findIndex</span> - возвращает индекс в массиве, если элемент удовлетворяет условию
                        проверяющей функции. В противном случае возвращается -1.
                    </ListItem>
                    <ListItem>
                        <span>slice</span> - возвращает новый массив, содержащий копию части исходного массива.
                    </ListItem>
                    <ListItem>
                        <span>every</span> - проверяет, удовлетворяют ли все элементы массива условию, заданному в
                        передаваемой функции.
                    </ListItem>
                    <ListItem>
                        <span>some</span> - проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в
                        передаваемой функции.
                    </ListItem>
                    <ListItem>
                        <span>flat</span> - возвращает новый массив, в котором все элементы вложенных подмассивов были
                        рекурсивно "подняты" на указанный уровень depth.
                    </ListItem>
                    <ListItem>
                        <span>flatMap</span> - сначала применяет функцию к каждому элементу, а затем преобразует
                        полученный результат в плоскую структуру и помещает в новый массив
                    </ListItem>
                    <ListItem>
                        <span>join</span> - возвращает строку
                    </ListItem>
                    <ListItem>
                        <span>[ ...arr, newValue ]</span> - добавление без мутации
                    </ListItem>
                    <ListItem>
                        <span>[ ...arr.slice(0, -1) ]</span> - удалить последний без мутации => вернет новый массив
                    </ListItem>
                    <ListItem>
                        <span>[ ...arr.slice(1) ]</span> - удалить первый без мутации => вернет новый массив
                    </ListItem>
                </List>

                <List sx={ myStyle }>Modify:
                    <ListItem>
                        <span>sort</span> - сортирует массив
                    </ListItem>
                    <ListItem>
                        <span>fill</span> - заполняет массив
                    </ListItem>
                    <ListItem>
                        <span>reverse</span> - заворачиват массив
                    </ListItem>
                    <ListItem>
                        <span>pop</span> - удаляет последний элемент из массива и возвращает его значение
                    </ListItem>
                    <ListItem>
                        <span>push</span> - добавить в конец
                    </ListItem>
                    <ListItem>
                        <span>shift</span> - удаляет первый элемент из массива и возвращает его значение
                    </ListItem>
                    <ListItem>
                        <span>unshift</span>- добавить в начало
                    </ListItem>
                    <ListItem>
                        <span>splice</span>- добавление/удаление в любом месте
                    </ListItem>
                </List>
            </Box>


        </Container>
    );
};

export default Ary;

// <Typography component={ 'li' }>qwe</Typography>
