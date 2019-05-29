/**
 * This file is part of LibLaserCut.
 * Copyright (C) 2011 - 2013 Thomas Oster <thomas.oster@rwth-aachen.de>
 * RWTH Aachen University - 52062 Aachen, Germany
 *
 *     LibLaserCut is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU Lesser General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     LibLaserCut is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU Lesser General Public License for more details.
 *
 *     You should have received a copy of the GNU Lesser General Public License
 *     along with LibLaserCut.  If not, see <http://www.gnu.org/licenses/>.
 **/

function move(x, y)
{
  _instance.move(x, y);
}

function line(x, y)
{
  _instance.line(x,y);
}

function get(property)
{
  return _instance.get(property);
}

function set(property, value)
{
  _instance.set(property, value);
}

function echo(text)
{
  _instance.echo(text);
}

function prompt(title, defaultValue)
{
  return _instance.prompt(title, defaultValue);
}

function promptFloat(title, defaultValue)
{
  var result = parseFloat(_instance.prompt(title, defaultValue.toString()));
  if (isNaN(result)) {
    return defaultValue;
  } else {
    return result;
  }
}
