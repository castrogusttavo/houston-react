import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Tornado01Icon({
  iconName = 'tornado-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
