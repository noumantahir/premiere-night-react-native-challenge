import { StyleSheet } from 'react-native';
import {colors} from '../../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
        margin: 16,
        backgroundColor: colors.backgroundSecondary,
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
        backgroundColor: colors.background,
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: colors.borderDark,
    },
    pillText: {
        color: colors.textTertiary,
    },
});

