<template>
    <v-container id="dashboard" fluid tag="section">
        <v-row>
            <v-col cols="12" lg="4">
                <template v-slot:reveal-actions>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ attrs, on }">
                            <v-btn v-bind="attrs" color="info" icon v-on="on">
                                <v-icon color="info"> mdi-refresh </v-icon>
                            </v-btn>
                        </template>
                        <span>Refresh</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ attrs, on }">
                            <v-btn v-bind="attrs" light icon v-on="on">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Change Date</span>
                    </v-tooltip>
                </template>
                <h4 class="card-title font-weight-light mt-2 ml-2">
                    Website Views
                </h4>
                <p class="d-inline-flex font-weight-light ml-2 mt-1">
                    Last Campaign Performance
                </p>
                <template v-slot:actions>
                    <v-icon class="mr-1" small> mdi-clock-outline </v-icon>
                    <span class="caption grey--text font-weight-light"
                        >updated 10 minutes ago</span
                    >
                </template>
                <RouterLink to="/user">
                    <button type="submit">
                        <h5>MY ROUTE</h5>
                    </button>
                </RouterLink>
            </v-col>
        </v-row>
    </v-container>
</template>
