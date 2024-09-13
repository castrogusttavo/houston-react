import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Summation01Icon({
  iconName = 'summation-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
