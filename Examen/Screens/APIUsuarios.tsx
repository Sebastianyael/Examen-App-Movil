import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, ActivityIndicator, Alert } from 'react-native';


interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}


const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function ListaDeUsuarios() {
    
    const [users, setUsers] = useState<User[]>([]);
    
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const [error, setError] = useState<string | null>(null);

    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(API_URL);
                
                if (!response.ok) {
                    
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data: User[] = await response.json();
                setUsers(data);
                setError(null); 

            } catch (err: any) {
                
                console.error("Fetch Error:", err);
                setError(`Failed to fetch users: ${err.message}`);
                Alert.alert("Error de Conexión", "No se pudo cargar la lista de usuarios. Verifica tu conexión a internet.");
            } finally {
                
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []); 

    
    if (isLoading) {
        return (
            <SafeAreaView style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={styles.loadingText}>Cargando usuarios...</Text>
            </SafeAreaView>
        );
    }

    
    if (error && !isLoading) {
        return (
            <SafeAreaView style={styles.centerContainer}>
                <Text style={styles.errorText}> Error al cargar los datos.</Text>
                <Text style={styles.errorMessage}>{error}</Text>
            </SafeAreaView>
        );
    }
    

    const renderItem = ({ item }: { item: User }) => (
        <View style={styles.itemContainer}>
            <View style={styles.userInfo}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.detailText}>{item.username}</Text>
                <Text style={styles.emailText}> {item.email}</Text>
            </View>
            <Text style={styles.idText}>ID: {item.id}</Text>
        </View>
    );

    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Usuarios de JSONPlaceholder</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No hay usuarios disponibles.</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F9FA',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E293B',
        paddingHorizontal: 16,
        paddingTop: 10,
        marginBottom: 10,
    },
    listContent: {
        paddingBottom: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 16,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        elevation: 2,
    },

    iconText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    userInfo: {
        flex: 1,
    },
    nameText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#1E293B',
    },
    detailText: {
        fontSize: 14,
        color: '#64748B',
        marginTop: 2,
    },
    emailText: {
        fontSize: 12,
        color: '#94A3B8',
        marginTop: 4,
    },
    idText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#475569',
    },
    separator: {
        height: 1,
        backgroundColor: '#F1F5F9',
        marginHorizontal: 16,
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#007AFF',
    },
    errorText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#DC2626',
        marginBottom: 8,
    },
    errorMessage: {
        fontSize: 14,
        color: '#EF4444',
        textAlign: 'center',
    },
    emptyContainer: {
        alignItems: 'center',
        paddingTop: 50,
    },
    emptyText: {
        fontSize: 16,
        color: '#94A3B8',
    }
});