import React, {useState, useEffect} from 'react';
import {Feather} from "@expo/vector-icons"
import { View, Text, Button, Image } from 'react-native';
import { TouchableOpacity, FlatList, ForceTouchGestureHandler } from 'react-native-gesture-handler';

import logoImg from "../../assets/logo.png"

import style from "./styles";

import api from "../../services/api";

function Incidents({ navigation, route }) {
    const [incidents, set_incidents] = useState([])
    const [total, set_total] = useState(0)
    const [page, set_page] = useState(1);
    const [loading, set_loading] = useState(false);
    async function loadIncidents() {
        if (loading){
            return;
        }
        if(total > 0 && incidents.length === total){
            return;
        }
        set_loading(true);
        const response = await api.get("incidents", {
            params: {page}
        })
        set_incidents([...incidents, ...response.data])
        set_total(response.headers["x-total-count"])
        set_page(page + 1)
        set_loading(false);
    }
    useEffect(() => {
        loadIncidents()
    }, []);
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg}/>
                <Text style={style.headerText}>
                    Total de <Text style={style.headerTextBold} >
                        {total} casos
                    </Text>.
                </Text>
            </View>
            <Text style={style.title}>Bem-vindo!</Text>
            <Text style={style.description}> Escolha um dos casos abaixo e salve o dia.</Text>
            <FlatList
                style={style.incidents}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={ ({ item: incident }) => (
                    <View style={style.incident} >
                        <Text style = {style.incidentProperty}>ONG:</Text>
                        <Text style = {style.incidentValue}>{incident.name}</Text>

                        <Text style = {style.incidentProperty}>CASO:</Text>
                        <Text style = {style.incidentValue}>{incident.title}</Text>

                        <Text style = {style.incidentProperty}>VALOR:</Text>
                        <Text style = {style.incidentValue}>{Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(incident.value)}</Text>

                        <TouchableOpacity 
                            style={style.incidentButton}
                            onPress={() => navigation.navigate('Details', {incident})}
                        >
                            <Text style={style.incidentButtonText}> Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"></Feather>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

export default Incidents;