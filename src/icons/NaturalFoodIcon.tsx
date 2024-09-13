import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NaturalFoodIcon({
  iconName = 'natural-food',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
