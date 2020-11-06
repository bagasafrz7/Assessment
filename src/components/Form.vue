<template>
  <div class="main-form">
    <b-container fluid>
      <h4>Create Order</h4>
      <div class="form-order">
        <b-row>
          <b-col cols="12">
            <form>
              <div class="detail-order">
                <b-row>
                  <b-col cols="2">
                    <h6>Detail</h6>
                    <p></p>
                  </b-col>
                  <b-col cols="10">
                    <div class="form-group">
                      <label for="exampleInputEmail1"
                        >Name <span>*</span></label
                      >
                      <b-form-select v-model="selected" class="mb-3">
                        <b-form-select-option :value="null" disabled
                          >Please select an option</b-form-select-option
                        >
                        <b-form-select-option
                          v-for="(item, index) in product"
                          :key="index"
                          :value="index"
                        >
                          {{ item.employee_name }}
                        </b-form-select-option>
                      </b-form-select>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1"
                        >Distribution Center <span>*</span></label
                      >
                      <select class="custom-select">
                        <option selected disabled>Choose a Place</option>
                        <!-- <option disabled>No Data Available</option> -->
                        <option value="DC Tangerang">DC Tangerang</option>
                        <option value="DC Cikarang">DC Cikarang</option>
                      </select>
                    </div>
                    <b-row>
                      <b-col cols="6">
                        <div class="form-group">
                          <label for="exampleInputEmail1"
                            >Payment Type <span>*</span></label
                          >
                          <select class="custom-select">
                            <option selected disabled>Choose a Payment</option>
                            <option value="Cash H+1">Cash H+1</option>
                            <option value="Cash H+3">Cash H+3</option>
                            <option value="Cash H+7">CashH+7</option>
                            <option value="Transfer H+1">Transfer H+1</option>
                            <option value="Transfer H+3">Transfer H+3</option>
                            <option value="Transfer H+7">Transfer H+7</option>
                          </select>
                        </div>
                      </b-col>
                      <b-col cols="6">
                        <div class="form-group">
                          <label for="exampleInputEmail1"
                            >Expired Date <span>*</span></label
                          >
                          <b-form-datepicker
                            id="example-i18n-picker"
                            :min="new Date().toISOString().substr(0, 10)"
                          ></b-form-datepicker>
                        </div>
                      </b-col>
                    </b-row>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Notes</label>
                      <b-form-textarea
                        id="textarea-state"
                        v-model="text"
                        :state="text.length >= 10"
                        placeholder="It must be at least 10 letters"
                        rows="3"
                      ></b-form-textarea>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <div class="product">
                <b-row>
                  <b-col cols="2">
                    <h6>Products</h6>
                  </b-col>
                  <b-col cols="10">
                    <div class="detail-product">
                      <b-row>
                        <b-col cols="8">
                          <div class="form-group">
                            <label for="exampleInputEmail1"
                              >Product <span>*</span></label
                            >
                            <select class="custom-select">
                              <option selected disabled>
                                Choose a Product
                              </option>
                              <option
                                v-for="(item, index) in firstInputOptions"
                                :key="index"
                                :value="index"
                              >
                                {{ item }}
                              </option>
                            </select>
                          </div>
                        </b-col>
                        <b-col cols="4">
                          <div class="form-group">
                            <label for="exampleInputEmail1"
                              >Unit <span>*</span></label
                            >
                            <select
                              class="custom-select"
                              @change="changePrice($event)"
                            >
                              <option selected disabled>Choose a Unit</option>
                              <option
                                value="Karton"
                                v-for="(item, index) in secondInputOptions"
                                :key="index"
                              >
                                {{ item }}
                              </option>
                            </select>
                          </div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col cols="3">
                          <div class="form-group">
                            <label for="exampleInputPassword1"
                              >Quantity <span>*</span></label
                            >
                            <input
                              type="number"
                              class="form-control"
                              :value="form.qty"
                              @change="updateQty"
                              id="exampleInputPassword1"
                            />
                          </div>
                        </b-col>
                        <b-col cols="3">
                          <div class="form-group">
                            <label for="exampleInputPassword1"
                              >Price <span>*</span></label
                            >
                            <input
                              type="number"
                              :value="form.price"
                              @change="updatePrice"
                              class="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>
                        </b-col>
                        <b-col cols="6">
                          <div class="form-group">
                            <label for="exampleInputPassword1"
                              >Total Price <span>*</span></label
                            >
                            <input
                              type="number"
                              class="form-control"
                              id="exampleInputPassword1"
                              v-model="form.totals"
                              name="total"
                              disabled
                            />
                          </div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col cols="6"></b-col>
                        <b-col cols="6">
                          <hr />
                          <b-row>
                            <b-col cols="6">
                              <p class="title-total">Total Nett Price</p>
                            </b-col>
                            <b-col cols="6" class="text-right">
                              <p class="title-total">{{ this.form.totals }}</p>
                            </b-col>
                          </b-row>
                        </b-col>
                      </b-row>
                    </div>
                    <div
                      class="detail-product"
                      v-for="(row, index) in rows"
                      :key="index"
                    >
                      <b-row>
                        <b-icon
                          v-on:click="removeElement(index)"
                          icon="dash-circle-fill"
                          variant="danger"
                          class="mt-4 pt-3"
                          style="cursor: pointer"
                        ></b-icon>
                        <b-col cols="7">
                          <div class="form-group">
                            <label for="exampleInputEmail1"
                              >Product <span>*</span></label
                            >
                            <select class="custom-select">
                              <option selected disabled>
                                Choose a Product
                              </option>
                              <option
                                v-for="(item, index) in firstInputOptions"
                                :key="index"
                                :value="index"
                              >
                                {{ item }}
                              </option>
                            </select>
                          </div>
                        </b-col>
                        <b-col cols="4">
                          <div class="form-group">
                            <label for="exampleInputEmail1"
                              >Unit <span>*</span></label
                            >
                            <select class="custom-select">
                              <option selected disabled>Choose a Unit</option>
                              <option
                                value="Karton"
                                v-for="(item, index) in secondInputOptions"
                                :key="index"
                              >
                                {{ item }}
                              </option>
                            </select>
                          </div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col cols="3" class="pl-4 ml-2">
                          <div class="form-group">
                            <label for="exampleInputPassword1"
                              >Quantity <span>*</span></label
                            >
                            <input
                              type="number"
                              class="form-control"
                              :value="form.qty1"
                              @change="updateQty1"
                              id="exampleInputPassword1"
                            />
                          </div>
                        </b-col>
                        <b-col cols="3">
                          <div class="form-group">
                            <label for="exampleInputPassword1"
                              >Price <span>*</span></label
                            >
                            <input
                              type="number"
                              :value="form.price1"
                              @change="updatePrice1"
                              class="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>
                        </b-col>
                        <b-col cols="5">
                          <div class="form-group">
                            <label for="exampleInputPassword1"
                              >Total Price <span>*</span></label
                            >
                            <input
                              type="number"
                              class="form-control"
                              id="exampleInputPassword1"
                              v-model="form.totals1"
                              name="total"
                              disabled
                            />
                          </div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col cols="6"></b-col>
                        <b-col cols="6">
                          <hr />
                          <b-row>
                            <b-col cols="6">
                              <p class="title-total">Total Nett Price</p>
                            </b-col>
                            <b-col cols="6" class="text-right">
                              <!-- <p class="title-total">{{ 300.0 }}</p> -->
                              <input
                                type="number"
                                class="form-control"
                                id="exampleInputPassword1"
                                v-model="form.totals1"
                                name="total"
                                disabled
                                style="
                                  border: none;
                                  background: transparent;
                                  text-align: right;
                                  font-weight: bold;
                                  padding: 0;
                                  margin: 0;
                                "
                              />
                            </b-col>
                          </b-row>
                        </b-col>
                      </b-row>
                    </div>
                    <b-button
                      variant="warning"
                      style="color: #fff"
                      @click="addRow"
                    >
                      New Item
                      <b-icon icon="plus" aria-hidden="true"></b-icon>
                    </b-button>
                    <b-row>
                      <b-col cols="6"></b-col>
                      <b-col cols="6">
                        <b-row>
                          <b-col cols="6">
                            <p class="title-total">Total :</p>
                          </b-col>
                          <b-col cols="6" class="text-right">
                            <p class="title-total">{{ this.form.subTotal }}</p>
                          </b-col>
                        </b-row>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </div>
              <b-button squared variant="success" class="float-right mr-4"
                >CONFIRM</b-button
              >
              <b-button
                squared
                variant="outline-danger"
                class="float-right mx-1"
                >CANCEL</b-button
              >
            </form>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import axios from 'axios'

export default {
  data() {
    return {
      selected: null,
      text: '',
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' }
      ],
      rows: [],
      dataProduct: [],
      items: [],
      firstInputOptions: [
        'Greenfields Full Cream Milk 1L',
        'Le Minerale 600ml',
        'Morning Dew Milk'
      ],
      secondInputOptions: ['Karton', 'Pak', 'Pcs'],
      form: {
        qty: 0,
        price: 0,
        totals: 0,
        qty1: 0,
        price1: 0,
        totals1: 0,
        subTotal: 0
      }
    }
  },
  computed: {
    ...mapGetters({ product: 'getDataProduct' })
  },
  created() {
    this.getProduct()
    // this.dataMap()
  },
  mounted() {},
  methods: {
    ...mapActions(['getProduct']),
    addRow() {
      this.rows.push({})
    },
    removeElement(index) {
      this.rows.splice(index, 1)
    },
    updateQty(event) {
      this.form.qty = event.target.value
      this.form.totals = this.form.qty * this.form.price
      this.form.subTotal = this.form.totals + this.form.totals1
    },
    updatePrice(event) {
      this.form.price = event.target.value
      this.form.totals = this.form.qty * this.form.price
      this.form.subTotal = this.form.totals + this.form.totals1
    },
    updateQty1(event) {
      this.form.qty1 = event.target.value
      this.form.totals1 = this.form.qty1 * this.form.price1
      this.form.subTotal = this.form.totals + this.form.totals1
    },
    updatePrice1(event) {
      this.form.price1 = event.target.value
      this.form.totals1 = this.form.qty1 * this.form.price1
      this.form.subTotal = this.form.totals + this.form.totals1
    }
  }
}
</script>

<style scoped src="../assets/css/main.css"></style>
