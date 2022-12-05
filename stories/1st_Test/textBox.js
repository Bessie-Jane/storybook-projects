import './textBox.css';

export const createTextBox = (title) => `

<div class="header">
    <h2>${title}</h2>
</div>

<div class="country">
    <form>
        <label for="countries">Select your favourite African country</label>
        <select id="countries" name="countries">
            <option selected value="None">None</option>
            <option value="Kenya">Kenya</option>
            <option value="Cameroun">Cameroun</option>
            <option value="Togo">Togo</option>
            <option value="Senegal">Senegal</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Angola">Angola</option>
            <option value="Ghana">Ghana</option>
            <option value="Benin Republic">Benin Republic</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Liberia">Liberia</option>
        </select>
    </form> 
</div>
`