import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Underpants01Icon({
  iconName = 'underpants-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
