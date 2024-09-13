import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Satellite01Icon({
  iconName = 'satellite-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
