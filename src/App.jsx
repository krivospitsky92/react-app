import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="currentDate">
          <h1 className="header">FRIDAY</h1>
          <p className="parag">31</p>
        </div>
        <div className="calendar">
          <h1 className="m-y">JULY 2020</h1>

          <div className="calendar-wrapper">
            <div className="row1">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="row2">
              <div></div>
              <div></div>
              <div></div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
            <div className="row3">
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
            </div>
            <div className="row4">
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
              <div>16</div>
              <div>17</div>
              <div>18</div>
            </div>
            <div className="row5">
              <div>19</div>
              <div>20</div>
              <div>21</div>
              <div>22</div>
              <div>23</div>
              <div>24</div>
              <div>25</div>
            </div>
            <div className="row6">
              <div>26</div>
              <div>27</div>
              <div>28</div>
              <div>29</div>
              <div>31</div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
