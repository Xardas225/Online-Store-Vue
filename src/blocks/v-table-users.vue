<template>
    <v-table theme="dark"> 
        <thead>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Email
                </th>
                <th>
                    Phone
                </th>
                <th>
                    Desc
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="user in paginatedUsers"
                :key="user.id"
            >
                <td class="text-left">{{ user.name }}</td>
                <td class="text-left">{{ user.email }}</td>
                <td class="text-left">{{ user.phone }}</td>
                <td class="text-left">{{ user.description }}</td>
            </tr>
        </tbody>
    </v-table>
    <v-pagination v-model="pageNumber" :length="pageCount"></v-pagination>

</template>

<script>
export default {
    name: 'v-table-users',
    props: {
        user_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            usersPerPage: 5,
            pageNumber: 1
        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.user_data.length / 5) 
        },
        paginatedUsers() {
            let from = ((this.pageNumber - 1) * this.usersPerPage);
            let to = from + this.usersPerPage;
            return this.user_data.slice(from, to);
        }
    },
    methods: {}
}
</script>

<style lang="scss">

</style>