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
                  </b-col>
                  <b-col cols="10">
                    <div class="form-group">
                      <label for="exampleInputEmail1"
                        >Name <span>*</span></label
                      >
                      <select class="custom-select">
                        <option selected disabled>Choose a Name</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1"
                        >Distribution Center <span>*</span></label
                      >
                      <select class="custom-select">
                        <option selected disabled>Choose a Place</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
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
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
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
                            class="mb-2"
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
                        placeholder="Enter at least 10 characters"
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
                              <option selected disabled>Choose a Name</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </b-col>
                        <b-col cols="4">
                          <div class="form-group">
                            <label for="exampleInputEmail1"
                              >Unit <span>*</span></label
                            >
                            <select class="custom-select">
                              <option selected disabled>Choose a Name</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
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
                              <p class="title-total">700.000</p>
                            </b-col>
                          </b-row>
                        </b-col>
                      </b-row>
                    </div>
                    <div class="detail-product">
                      <b-row>
                        <b-icon
                          icon="dash-circle-fill"
                          variant="danger"
                          class="mt-4 pt-3"
                        ></b-icon>
                        <b-col cols="7">
                          <div class="form-group">
                            <label for="exampleInputEmail1"
                              >Product <span>*</span></label
                            >
                            <select class="custom-select">
                              <option selected disabled>Choose a Name</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </b-col>
                        <b-col cols="4">
                          <div class="form-group">
                            <label for="exampleInputEmail1"
                              >Unit <span>*</span></label
                            >
                            <select class="custom-select">
                              <option selected disabled>Choose a Name</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
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
                              <p class="title-total">300.000</p>
                            </b-col>
                          </b-row>
                        </b-col>
                      </b-row>
                    </div>
                    <b-button variant="warning" style="color: #fff">
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
                            <p class="title-total">1.000.000</p>
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
export default {
  data() {
    return {
      selected: null,
      text: '',
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' }
      ]
    }
  }
}
</script>

<style scoped src="../assets/css/main.css"></style>
