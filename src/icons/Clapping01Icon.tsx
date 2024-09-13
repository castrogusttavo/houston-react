import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Clapping01Icon({
  iconName = 'clapping-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
