<template>
    <div>
        <navbar />

        <v-container class="my-8">

            <div>

                <v-row class="d-flex justify-center mb-4">
                    <v-col cols="" md="">
                        <v-img width="140" height="140" class="mx-auto radius-circle" src="../../assets/img/logo.png"></v-img>
                    </v-col>
                </v-row>

                <v-row class="my-2">
                    <v-col cols="" md="" class="d-flex justify-center">
                        <v-icon>mdi-account</v-icon>
                        <h3 class="mx-3">Zhyar Ali</h3>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="" md="" class="d-flex justify-center">
                        <v-icon>mdi-email</v-icon>
                        <h4 class="mx-3">zhyaralimahmud@gmail.com</h4>
                    </v-col>
                </v-row>

                <v-row class="my-8 rabar-font">
                    <v-col cols="12" md="" class="d-flex justify-center flex-wrap">
                        <div class="mx-16">
                            <p>ژمارەی پۆستەکان : 4</p>
                        </div>

                        <div class="mx-16">
                            <p>دەسەڵات : ئەدمین</p>
                        </div>

                    </v-col>
                </v-row>

            </div>


            <!-- edit  -->
            <v-row>
                <v-col class="d-flex justify-center">
                    <v-dialog v-model="edit_dialog" fullscreen>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn v-bind="attrs" v-on="on"
                                class="rabar-font btn-action deep-purple radius-10 white--text">
                                <v-icon>mdi-account-edit</v-icon>
                                گۆڕانکاری
                            </v-btn>
                        </template>
                        <v-card class="rabar-font radius-15 py-5 ">
                            <v-toolbar dark color="primary">
                                <v-btn icon dark @click="edit_dialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-toolbar-items>
                                    <v-btn @click="update_profile()" dark text class="rabar-font">
                                        <v-icon>mdi-account-edit</v-icon>
                                        سەیڤ
                                    </v-btn>
                                </v-toolbar-items>
                            </v-toolbar>

                            <v-card-text>
                                <v-container>
                                    <v-row class="d-flex justify-center">

                                        <v-col cols="" lg="12" md="" class="my-8">
                                            <v-img width="140"  height="140" class="image-preview mx-auto radius-circle"
                                                src="../../assets/img/logo.png">

                                                <div>
                                                    <v-btn color="deep-purple" class="text-none white--text" depressed
                                                        :loading="isSelecting" @click="onButtonClick"
                                                        style="width:100%;position:absolute;bottom:0px;font-size:10px">
                                                        <v-icon left>
                                                            {{icon}}
                                                        </v-icon>
                                                        وێنە بگۆڕە
                                                    </v-btn>
                                                    <input ref="uploader" class="d-none" type="file" accept="image/*"
                                                        @change="onFileChanged">
                                                </div>
                                            </v-img>
                                        </v-col>


                                        <v-col  cols="12" lg="5" class="my-3">
                                            <v-text-field outlined label="ناو" 
                                                class="rabar-font radius-10">
                                            </v-text-field>





                                            <v-text-field outlined label="ناوی بەکارهێنەر" 
                                                class="rabar-font radius-10">
                                            </v-text-field>


                                            <v-text-field outlined label="ئیمەیڵ"  required
                                                class="rabar-font radius-10">
                                            </v-text-field>


                                            <v-text-field outlined label="وشەی نهێنی"
                                                class="rabar-font radius-10" required
                                                :append-icon="show ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                                                name="password" :type="show ? 'input' : 'password'" hide-details="auto"
                                                @click:append="show = !show">

                                            </v-text-field>




                                        </v-col>



                                    </v-row>
                                </v-container>

                            </v-card-text>

                        </v-card>
                    </v-dialog>
                </v-col>
            </v-row>
            <!-- end edit -->



        </v-container>


    </div>
</template>


<script>
    import navbar from '../../layouts/Dashboard/nav.vue'
    export default {
        data() {
            return {
                imgChange:null,
                edit_dialog: false,
                show: false,
                defaultButtonText: 'وێنە بگۆڕە',
                selectedFile: null,
                isSelecting: false,
                icon: 'mdi-cloud-upload',
                url: ''
            }
        },
        components: {
            navbar
        },
        computed: {
            buttonText() {
                return this.selectedFile ? this.selectedFile.name : this.defaultButtonText
            },
            
        },

        methods: {
            onButtonClick() {
                this.isSelecting = true
                window.addEventListener('focus', () => {
                    this.isSelecting = false
                }, {
                    once: true
                })

                this.$refs.uploader.click()
            },
            onFileChanged(e) {

                this.selectedFile = e.target.files[0]
                // let file = e.target.files[0]
                // this.imgChange.src = URL.createObjectURL(file);

                // do something
            },
            update_profile(){
                // code in here
                this.edit_dialog=false
            }
        }
    }
</script>
<style>
    .image-file::file-selector-button {
        background: black !important;
        padding: 20px;
        visibility: hidden;
        border: none !important;
        content-visibility: hidden;
    }
</style>