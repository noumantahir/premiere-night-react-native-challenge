import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 12,
        margin: 16,
        backgroundColor: '#f2f2f2',
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        marginBottom: 8,
    },
    overview: {
        lineHeight: 22,
    },
    genresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    pill: {
        backgroundColor: '#fff',
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#d0d0d0',
    },
    pillText: {
        color: '#333',
    },
});

