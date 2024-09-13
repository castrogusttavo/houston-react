import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Simcard01Icon({
  iconName = 'simcard-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
